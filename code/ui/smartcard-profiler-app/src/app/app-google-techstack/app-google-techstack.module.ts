import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubsubHomeComponent } from './pubsub/pubsub-home/pubsub-home.component';
import { BigqueryHomeComponent } from './bigquery/bigquery-home/bigquery-home.component';
import { DataprocyHomeComponent } from './dataproc/dataprocy-home/dataprocy-home.component';
import { AppGoogleTechstackRouting } from './app-google-teckstack-routing';



@NgModule({
  declarations: [PubsubHomeComponent, BigqueryHomeComponent, DataprocyHomeComponent],
  imports: [
    CommonModule,
    AppGoogleTechstackRouting
  ]
})
export class AppGoogleTechstackModule { }
