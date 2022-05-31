import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './DashBoard/Header/header/header.component';
import { HomeComponent } from './DashBoard/Home/home/home.component';
import { ObservableoprComponent } from './DashBoard/Observable Operater/observableopr/observableopr.component';
import { OfoprComponent } from './DashBoard/Of_Opr/ofopr/ofopr.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'observable',component:ObservableoprComponent},
  {path:'ofopr',component:OfoprComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
