import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionsRouting } from './predictions.routing';
import { CustPredictionsHomeComponent } from './customer/cust-predictions-home/cust-predictions-home.component';

@NgModule({
  declarations: [CustPredictionsHomeComponent],
  imports: [
    CommonModule,
    PredictionsRouting
  ]
})
export class PredictionsModule { }
