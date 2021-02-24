import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    NavbarComponent,
  ]
})
export class AppCommonModule { }
