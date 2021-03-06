import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Goal Tracker';
  constructor(private _httpService: HttpService){}
  allGoals: any;

  ngOnInit() {
    this.getGoals();
  }

  getGoals() {
    let observable = this._httpService.getGoals();
    observable.subscribe(data => {
        this.allGoals = data['data'];
        console.log('allGoals: ', this.allGoals);
    })
    return this.allGoals;
  }

}
