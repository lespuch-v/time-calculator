import { Component } from '@angular/core';
import { ServiceService } from './service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'time-calculator';
  year = this.service.checkoutForm.value.firstUserInput;

  // handleClick($event:any){
  //   const button = $event.target.id 
  //   console.log(button);
  //   console.log(this.service.yearNumber)
  // }

  handleReset(){
    this.service.checkoutForm.reset();
    this.service.isYearActive = false;
    this.service.isMainContainersActive = false;
    this.service.displayInvalidMessage = false;
    this.service.yearNumber = [];

  }

  onSubmit() {
    // Activate main containers
    this.service.isMainContainersActive = true
    this.service.checkIfValid()

    // Year Calculations
    this.service.calculateYearDifference(
      this.service.checkoutForm.value.firstUserInput,
      this.service.checkoutForm.value.secondUserInput
    );
    // Month Calculations
    this.service.CalculateMonthsBetweenDates(
      this.service.checkoutForm.value.firstUserInput,
      this.service.checkoutForm.value.secondUserInput
    );
    // Hours Calculations
    this.service.CalculateHoursBetweenDates(
      this.service.checkoutForm.value.firstUserInput,
      this.service.checkoutForm.value.secondUserInput
    );
    // Days Calculations
    this.service.CalculateDaysBetweenDates(
      this.service.checkoutForm.value.firstUserInput,
      this.service.checkoutForm.value.secondUserInput
    );
    // Weeks Calculations
    this.service.CalculateWeeksBetweenDates(
      this.service.checkoutForm.value.firstUserInput,
      this.service.checkoutForm.value.secondUserInput
    );
    // Seconds Calculations
    this.service.CalculateSecondsBetweenDates(
      this.service.checkoutForm.value.firstUserInput,
      this.service.checkoutForm.value.secondUserInput
    );
  }

  


  constructor(public service: ServiceService) {}
}
