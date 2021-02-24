import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubsubHomeComponent } from './pubsub/pubsub-home/pubsub-home.component';
import { BigqueryHomeComponent } from './bigquery/bigquery-home/bigquery-home.component';
import { DataprocyHomeComponent } from './dataproc/dataprocy-home/dataprocy-home.component';

const routes: Routes = [

   {
    path:'pubsub',
    children: [
      {
        path:'', component: PubsubHomeComponent
      }
    ]
  },
   {
    path:'bigquery',
    children: [
      {
        path:'', component: BigqueryHomeComponent
      }
    ]
  },{
    path:'dataproc',
    children: [
      {
        path:'', component: DataprocyHomeComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppGoogleTechstackRouting { }
