import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { NewGoalComponent } from './new-goal/new-goal.component';
import { ShowGoalsComponent } from './show-goals/show-goals.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NewGoalComponent,
    ShowGoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
