import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getGoals();
  }

  getGoals() {
    return this._http.get('/goals');
  }
  newGoal(newGoal) {
    return this._http.post('/goals', newGoal);
  }

}