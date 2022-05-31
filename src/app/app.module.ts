import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './DashBoard/Home/home/home.component';
import { HeaderComponent } from './DashBoard/Header/header/header.component';
import { ObservableoprComponent } from './DashBoard/Observable Operater/observableopr/observableopr.component';
import { OfoprComponent } from './DashBoard/Of_Opr/ofopr/ofopr.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ObservableoprComponent,
    OfoprComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
