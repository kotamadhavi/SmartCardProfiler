import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardIntakeComponent } from './transaction/create/card-intake/card-intake.component';

const routes: Routes = [
  {
    path:'',component:CardIntakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
