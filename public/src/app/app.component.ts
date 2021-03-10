import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import * as dayjs from "dayjs";
import * as customParseFormat from "dayjs/plugin/customParseFormat";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}

  selectedMonth: any;
  currentMonthDays: any;
  previousMonthDays: any;
  nextMonthDays: any;
  INITIAL_MONTH: any;
  INITIAL_YEAR: any;
  WEEKDAYS: any;
  TODAY: any;
  calendarDaysElement: any;
  expandDayTitle:any;
  dayEvents:any;
  dayBirths:any;
  dayDeaths:any;
  showDayContent:any;

  ngOnInit() {
    this.initialScript();
    this.showDayContent = 'events';
  }

  initialScript() {
    this.WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    this.TODAY = dayjs().format("YYYY-MM-DD");
    this.INITIAL_YEAR = Number(dayjs().format("YYYY"));
    this.INITIAL_MONTH = Number(dayjs().format("M"));
    this.selectedMonth = dayjs(new Date(this.INITIAL_YEAR, this.INITIAL_MONTH - 1, 1));
    // -- create calendar --
    this.presentMonth();
  }

  createCalendar(year, month) {
    this.calendarDaysElement  = [];
    this.selectedMonth = dayjs(new Date(year, month-1)).format("MMMM YYYY");
    this.currentMonthDays = this.createDaysForCurrentMonth(year,month);
    this.previousMonthDays = this.createDaysForPreviousMonth(year,month);
    this.nextMonthDays = this.createDaysForNextMonth(year, month);
    const days = [...this.previousMonthDays, ...this.currentMonthDays, ...this.nextMonthDays];
    days.forEach((day) => {
      this.appendDay(day, this.calendarDaysElement);
    });
  }

  appendDay(day, calendarDaysElement) {
    const dayElement = [day.dayOfMonth];
    if (!day.isCurrentMonth) {
      dayElement.push('not_current');
      calendarDaysElement.push(dayElement);
    } else if (day.date === this.TODAY) {
      dayElement.push('today');
      calendarDaysElement.push(dayElement);
    } else {
      dayElement.push('');
      calendarDaysElement.push(dayElement);
    }
  }
  removeAllDayElements(calendarDaysElement) {
    let first = calendarDaysElement.firstElementChild;
    while (first) {
      first.remove();
      first = calendarDaysElement.firstElementChild;
    }
  }
  getNumberOfDaysInMonth(year, month) {
    return dayjs(`${year}-${month}-01`).daysInMonth();
  }
  createDaysForCurrentMonth(year, month) {
    return [...Array(this.getNumberOfDaysInMonth(year, month))].map((day, index) => {
      return {
        date: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: true
      };
    });
  }
  createDaysForPreviousMonth(year, month) {
    const firstDayOfTheMonthWeekday = this.getWeekday(this.currentMonthDays[0].date);
    const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");
    // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
    const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
      ? firstDayOfTheMonthWeekday - 1
      : 6;
    const previousMonthLastMondayDayOfMonth = dayjs(this.currentMonthDays[0].date)
      .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
      .date();
    return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
      return {
        date: dayjs(
          `${previousMonth.year()}-${previousMonth.month() + 1}-${
            previousMonthLastMondayDayOfMonth + index
          }`
        ).format("YYYY-MM-DD"),
        dayOfMonth: previousMonthLastMondayDayOfMonth + index,
        isCurrentMonth: false
      };
    });
  }
  createDaysForNextMonth(year, month) {
    const lastDayOfTheMonthWeekday = this.getWeekday(
      `${year}-${month}-${this.currentMonthDays.length}`
    );
    const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month");
    const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
      ? 7 - lastDayOfTheMonthWeekday
      : lastDayOfTheMonthWeekday;
    return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
      return {
        date: dayjs(
          `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
        ).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: false
      };
    });
  }
  getWeekday(date) {
    var weekday = dayjs(date);
    return Number(weekday['$W']);
  }
  previousMonth() {
    dayjs.extend(customParseFormat)
    var test = dayjs(this.selectedMonth, "MMMM YYYY");
    var test2 = Number(test.format('M')) - 1;
    this.createCalendar(test.format("YYYY"), String(test2));
  }
  presentMonth() {
    this.selectedMonth = dayjs(new Date(this.INITIAL_YEAR, this.INITIAL_MONTH - 1, 1));
    this.createCalendar(this.selectedMonth.format("YYYY"), this.selectedMonth.format("M"));
  }
  nextMonth() {
    dayjs.extend(customParseFormat)
    var test = dayjs(this.selectedMonth, "MMMM YYYY");
    var test2 = Number(test.format('M')) + 1;
    this.createCalendar(test.format("YYYY"), String(test2));
  }

  openDayDisplay(day, month) {
    var splitMonthYear = month.split(" ");
    this.expandDayTitle = splitMonthYear[0] + " " + day + ", " + splitMonthYear[1];
    const expandDayBtn = document.querySelector('.expandDay');
    const dayContent = document.querySelector('.dayContent');
    const calendarMonth = document.querySelector('.calendar-month');
    expandDayBtn.classList.add('show');
    dayContent.classList.add('show');
    calendarMonth.classList.add('hide');

    var monthNum = dayjs().format('M');
    var monthDay = '?month=' + monthNum + '&day=' + day;

    let observable = this._httpService.getHistory(monthDay);
    observable.subscribe(data => {
        this.dayEvents = data['data']['Events'];
        this.dayBirths = data['data']['Births'];
        this.dayDeaths = data['data']['Deaths'];
    })
  }
  showContent(string) {
    this.showDayContent = string;
  }
  toggleAsc() {
    this.dayEvents.reverse();
    this.dayBirths.reverse();
    this.dayDeaths.reverse();
  }
  closeDisplay() {
    const expandDayBtn = document.querySelector('.expandDay');
    const dayContent = document.querySelector('.dayContent');
    const calendarMonth = document.querySelector('.calendar-month');
    expandDayBtn.classList.remove('show');
    dayContent.classList.remove('show');
    calendarMonth.classList.remove('hide');
  }
}
