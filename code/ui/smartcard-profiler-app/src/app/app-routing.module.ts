import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardIntakeComponent } from './transaction/create/card-intake/card-intake.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  }, {
    path: 'masterdata',
    loadChildren: () => import('./masterdata/masterdata.module').then(m => m.MasterdataModule)
  }, {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule)
  }, {
    path: 'predictions',
    loadChildren: () => import('./predictions/predictions.module').then(m => m.PredictionsModule)
  }, {
    path: 'google-techstack',
    loadChildren: () => import('./app-google-techstack/app-google-techstack.module').then(m => m.AppGoogleTechstackModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
