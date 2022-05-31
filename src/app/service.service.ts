import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  // Form items in String
  year: string = '';
  month: string = '';
  days: string = '';
  hours: string = '';
  weeks: string = '';
  seconds: string = '';

  // Form items in Number
  yearNumber: number[] = [];
  isYearActive = false;
  isMainContainersActive = false;
  displayInvalidMessage = false;

  timeList: string[] = ['year', 'month', 'day', 'hour', 'week', 'second'];

  // Forms  //
  checkoutForm = this.formBuilder.group({
    firstUserInput: '',
    secondUserInput: '',
  });

  // check user input
  // ! continue here
  checkIfValid() {
    const myRegex =
      /^((0[1-9]|1[012]|[1-9])[- /.](0[1-9]|[12][0-9]|3[01]|[1-9])[- /.](19|20)\d\d|(19|20)\d\d[- /.](0[1-9]|1[012]|[1-9])[- /.](0[1-9]|[12][0-9]|3[01]|[1-9]))$/;
    // const myRegex = /(\d+)[.](\d+)[.](\d+)/;
    let firstINPT = myRegex.test(this.checkoutForm.value.firstUserInput);
    let secondINPT = myRegex.test(this.checkoutForm.value.secondUserInput);
    // console.log(firstINPT);
    // console.log(secondINPT);

    if (!firstINPT === true || !secondINPT === true) {
      {
        this.displayInvalidMessage = true;
        this.isMainContainersActive = false;
        if (this.displayInvalidMessage === true) {
          setInterval(() => {
            this.displayInvalidMessage = false;
          }, 3000);
        }
      }
    }
  }
  // Time Calculations
  calculateYearDifference(date1: string, date2: string) {
    const diff = new Date(date2).getFullYear() - new Date(date1).getFullYear();
    this.year = diff.toString();

    for (let i = 0; i < Number(this.year); i++) {
      this.yearNumber.push(i);
    }
  }

  CalculateMonthsBetweenDates(date1: string, date2: string) {
    let diff = new Date(date2).getMonth() - new Date(date1).getMonth();
    diff +=
      (new Date(date2).getFullYear() - new Date(date1).getFullYear()) * 12;
    this.month = diff.toString();
  }

  CalculateHoursBetweenDates(date1: string, date2: string) {
    const diff = new Date(date2).getTime() - new Date(date1).getTime();
    const hour = Math.floor(diff / (1000 * 60 * 60));
    this.hours = hour.toString();
  }

  CalculateDaysBetweenDates(date1: string, date2: string) {
    const diff = new Date(date2).getTime() - new Date(date1).getTime();
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.days = day.toString();
  }

  CalculateWeeksBetweenDates(date1: string, date2: string) {
    const diff = new Date(date2).getTime() - new Date(date1).getTime();
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    this.weeks = weeks.toString();
  }

  CalculateSecondsBetweenDates(date1: string, date2: string) {
    const diff = new Date(date2).getTime() - new Date(date1).getTime();
    this.seconds = String(diff / 1000);
  }

  constructor(private formBuilder: FormBuilder) {}
}
