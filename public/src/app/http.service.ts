import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
  }
  getHistory(monthDay) {
    return this._http.get('/history' + monthDay);
  }
}