import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardIntakeComponent } from './transaction/create/card-intake/card-intake.component';
import { CardIntakeListComponent } from './transaction/create/card-intake-list/card-intake-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardIntakeComponent,
    CardIntakeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
