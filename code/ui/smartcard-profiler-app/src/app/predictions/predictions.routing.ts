import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustPredictionsHomeComponent } from './customer/cust-predictions-home/cust-predictions-home.component';

const routes: Routes = [
   {
     path: '', component: CustPredictionsHomeComponent,
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictionsRouting { }
