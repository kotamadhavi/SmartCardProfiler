import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsHomeComponent } from './cards/cards-home/cards-home.component';
import { CreateComponent } from './cards/crud/create/create.component';
import { ViewComponent } from './cards/crud/view/view.component';
import { UpdateComponent } from './cards/crud/update/update.component';
import { DeleteComponent } from './cards/crud/delete/delete.component';
import { CustTransactionsHomeComponent } from './customer/cust-transactions-home/cust-transactions-home.component';
import { TransactionsRouting } from './transactions.routing';


@NgModule({
  declarations: [CardsHomeComponent, CreateComponent, ViewComponent, UpdateComponent, DeleteComponent, CustTransactionsHomeComponent],
  imports: [
    CommonModule,
    TransactionsRouting
  ]
})
export class TransactionsModule { }
