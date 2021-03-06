import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss']
})
export class NewGoalComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  newGoal: any;

  ngOnInit() {
    // this.newUser = { 'Name': '', 'Description': '', 'CreationDay': '', 'UpdatedAt': '', 'CurrentMonthName': '', 'CurrentMonth': [{'Day': 1, 'WeekDay': '', 'Status': 'undefined'}, {'Day': 2, 'WeekDay': '', 'Status': 'undefined'}, {'Day': 3, 'WeekDay': '', 'Status': 'undefined'}, {'Day': 4, 'WeekDay': '', 'Status': 'undefined'}, {'Day': 5, 'WeekDay': '', 'Status': 'undefined'}, {'Day': 6, 'WeekDay': '', 'Status': 'undefined'}, {'Day': 7, 'WeekDay': '', 'Status': 'undefined'}, {'Day': 8, 'WeekDay': '', 'Status': 'undefined'}, {'Day': 9, 'WeekDay': '', 'Status': 'undefined'},{'Day': 10, 'WeekDay': '', 'Status': 'undefined'},{'Day': 11, 'WeekDay': '', 'Status': 'undefined'},{'Day': 12, 'WeekDay': '', 'Status': 'undefined'},{'Day': 13, 'WeekDay': '', 'Status': 'undefined'},{'Day': 14, 'WeekDay': '', 'Status': 'undefined'},{'Day': 15, 'WeekDay': '', 'Status': 'undefined'},{'Day': 16, 'WeekDay': '', 'Status': 'undefined'},{'Day': 17, 'WeekDay': '', 'Status': 'undefined'},{'Day': 18, 'WeekDay': '', 'Status': 'undefined'},{'Day': 19, 'WeekDay': '', 'Status': 'undefined'},{'Day': 20, 'WeekDay': '', 'Status': 'undefined'},{'Day': 21, 'WeekDay': '', 'Status': 'undefined'},{'Day': 22, 'WeekDay': '', 'Status': 'undefined'},{'Day': 23, 'WeekDay': '', 'Status': 'undefined'},{'Day': 24, 'WeekDay': '', 'Status': 'undefined'},{'Day': 25, 'WeekDay': '', 'Status': 'undefined'},{'Day': 26, 'WeekDay': '', 'Status': 'undefined'},{'Day': 27, 'WeekDay': '', 'Status': 'undefined'},{'Day': 28, 'WeekDay': '', 'Status': 'undefined'},{'Day': 29, 'WeekDay': '', 'Status': 'undefined'},{'Day': 30, 'WeekDay': '', 'Status': 'undefined'},{'Day': 31, 'WeekDay': '', 'Status': 'undefined'}]};
    this.newGoal = { 'Name': '', 'Description': '', 'Type': '', 'DaysCompleted': [] };
  }

  createGoal() {
    console.log('newGoal: ', this.newGoal);
    let observable = this._httpService.newGoal(this.newGoal);
    observable.subscribe(data => {
      console.log("Data: ", data);
    })
  }

}
