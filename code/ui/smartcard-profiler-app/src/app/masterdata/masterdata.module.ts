import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { MasterDataRouting } from './masterdata.routing';



@NgModule({
  declarations: [CustomerHomeComponent],
  imports: [
    CommonModule,
    MasterDataRouting
  ]
})
export class MasterdataModule { }
