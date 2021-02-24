import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsHomeComponent } from './cards/cards-home/cards-home.component';

const routes: Routes = [
   {
     path: '', component: CardsHomeComponent,
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRouting { }
