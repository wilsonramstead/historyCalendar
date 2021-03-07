import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

import * as dayjs from "dayjs";
import { stringify } from 'querystring';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() allGoals: any;

  constructor(private _httpService: HttpService) {}

  selectedMonth: any;
  currentMonthDays: any;
  previousMonthDays: any;
  nextMonthDays: any;
  INITIAL_MONTH: any;
  INITIAL_YEAR: any;
  WEEKDAYS: any;
  TODAY: any;
  fileref: any;
  calendarDaysElement: any;

  ngOnInit() {

    this.initialScript();
  }

  initialScript() {
    this.WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    this.TODAY = dayjs().format("YYYY-MM-DD");
    this.INITIAL_YEAR = Number(dayjs().format("YYYY"));
    this.INITIAL_MONTH = Number(dayjs().format("M"));
    this.selectedMonth = dayjs(new Date(this.INITIAL_YEAR, this.INITIAL_MONTH - 1, 1));
    // -- create calendar --
    this.createCalendar(this.INITIAL_YEAR, this.INITIAL_MONTH);
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
    console.log('days_23124: ', days);
  }

  
  appendDay(day, calendarDaysElement) {
    const dayElementClassList = [];
    dayElementClassList.push("calendar-day");
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
    this.selectedMonth = dayjs(this.selectedMonth).subtract(1, "month");
    this.createCalendar(this.selectedMonth.format("YYYY"), this.selectedMonth.format("M"));
  }
  presentMonth() {
    this.selectedMonth = dayjs(new Date(this.INITIAL_YEAR, this.INITIAL_MONTH - 1, 1));
    this.createCalendar(this.selectedMonth.format("YYYY"), this.selectedMonth.format("M"));
  }
  nextMonth() {
    this.selectedMonth = dayjs(this.selectedMonth).add(1, "month");
    this.createCalendar(this.selectedMonth.format("YYYY"), this.selectedMonth.format("M"));
  }

  // getGoals() {
  //   let observable = this._httpService.getGoals();
  //   observable.subscribe(data => {
  //       this.allGoals = data['data'];
  //       console.log('getGoals from calendar: ', this.allGoals);
  //   })
  //   return this.allGoals;
  // }




  // Select DOM Items
// const menuBtn = document.querySelector('.menu-btn')
// const menu = document.querySelector('.menu')
// const menuNav = document.querySelector('.menu-nav')
// const menuBranding = document.querySelector('.menu-branding')

// const navItems = document.querySelectorAll('.nav-item')

// // Set Initial State of Menu
// let showMenu = false;

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {
//     if(!showMenu) {
//         menuBtn.classList.add('close');
//         menu.classList.add('show');
//         menuNav.classList.add('show');
//         menuBranding.classList.add('show');
//         navItems.forEach(item => item.classList.add('show'));
//         showMenu = true;
//     } else {
//         menuBtn.classList.remove('close');
//         menu.classList.remove('show');
//         menuNav.classList.remove('show');
//         menuBranding.classList.remove('show');
//         navItems.forEach(item => item.classList.remove('show'));
//         showMenu = false;
//     }

// }

  expandDayTitle:any;

  openDayDisplay(day, month) {
    var splitMonthYear = month.split(" ");
    this.expandDayTitle = splitMonthYear[0] + " " + day + ", " + splitMonthYear[1];
    const expandDayBtn = document.querySelector('.expandDay');
    const dayContent = document.querySelector('.dayContent');
    const calendarMonth = document.querySelector('.calendar-month');
    expandDayBtn.classList.add('show');
    dayContent.classList.add('show');
    calendarMonth.classList.add('hide');
  }

  closeDisplay() {
    console.log('working');
    const expandDayBtn = document.querySelector('.expandDay');
    const dayContent = document.querySelector('.dayContent');
    const calendarMonth = document.querySelector('.calendar-month');
    expandDayBtn.classList.remove('show');
    dayContent.classList.remove('show');
    calendarMonth.classList.remove('hide');
  }
}
