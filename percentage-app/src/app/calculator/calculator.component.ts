import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { StateService } from '../state.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  typeOneInput1!: number;
  typeOneInput2!: number;
  typeOneans!: number;

  typeTwoInput1!: number;
  typeTwoInput2!: number;
  typeTwoans!: number;

  typeThreeInput1!: number;
  typeThreeInput2!: number;
  typeThreeans!: number;

  typeFourInput1!: number;
  typeFourInput2!: number;
  typeFourans!: number;
  history: any = [];
  constructor(   private sharedService: StateService) {
    this.sharedService.sendHistory.subscribe((res: any) => {
      this.history = res;
    });
  }
  calc(mode: any) {
    let percentVal: number;
    let denominator: number, numerator:number;

    if(mode === 'type1') {
      if(!this.typeOneInput1 || this.typeOneInput1 === null) {
        return;
      }
      if(!this.typeOneInput2 || this.typeOneInput2 === null) {
        return;
      }
      percentVal = this.typeOneInput1 / 100;
       this.typeOneans =  percentVal * this.typeOneInput2;
       this.history.unshift({
        input1: this.typeOneInput1,
        input2: this.typeOneInput2,
        ans: this.typeOneans
       });
    }
    if(mode === 'type2') {
      if(!this.typeTwoInput1 || this.typeTwoInput1 === null) {
        return;
      }
      if(!this.typeTwoInput2 || this.typeTwoInput2 === null) {
        return;
      }
      percentVal = this.typeTwoInput1 / this.typeTwoInput2;
       this.typeTwoans =  percentVal * 100;
       this.history.unshift({
        input1: this.typeTwoInput1,
        input2: this.typeTwoInput2,
        ans:  this.typeTwoans
       });
    }
    if(mode === 'type3') {
      if(!this.typeThreeInput1 || this.typeThreeInput1 === null) {
        return;
      }
      if(!this.typeThreeInput2 || this.typeThreeInput2 === null) {
        return;
      }
      percentVal = this.typeThreeInput2 / 100;
       this.typeThreeans =  this.typeThreeInput1 / percentVal;
       this.history.unshift({
        input1: this.typeThreeInput1,
        input2: this.typeThreeInput2,
        ans:  this.typeThreeans
       });
    }
    if(mode === 'type4') {
      if(!this.typeFourInput1 || this.typeFourInput1 === null) {
        return;
      }
      if(!this.typeFourInput2 || this.typeFourInput2 === null) {
        return;
      }
      numerator = Math.abs(this.typeFourInput1 - this.typeFourInput2);
      denominator = Math.abs(this.typeFourInput1 + this.typeFourInput2);
      this.typeFourans = (numerator / (denominator/2)) * 100;
      this.history.unshift({
        input1: this.typeFourInput1,
        input2: this.typeFourInput2,
        ans: this.typeFourans
       });
    }
    this.sharedService.sendHistory.next(this.history);
  }
}
