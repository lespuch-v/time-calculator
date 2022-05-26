import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MaterialExampleModule } from './material-example-module/material-example-module.module'; 


import { AppComponent } from './app.component';
import { YearComponent } from './year/year.component';
import { MonthComponent } from './month/month.component';
import { HoursComponent } from './hours/hours.component';
import { DaysComponent } from './days/days.component';
import { WeeksComponent } from './weeks/weeks.component';
import { SecondsComponent } from './seconds/seconds.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceService } from './service.service';


@NgModule({
  declarations: [
    AppComponent,
    YearComponent,
    MonthComponent,
    HoursComponent,
    DaysComponent,
    WeeksComponent,
    SecondsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MaterialExampleModule

    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



