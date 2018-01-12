import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowactionplanComponent } from './showactionplan/showactionplan.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FundgettingcollegesComponent } from './fundgettingcolleges/fundgettingcolleges.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import {DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { FtinfoService } from './ftinfo.service';
import { DataTableDemo3 } from './fundtrackersummary/data-table-demo3';
import { Http, Response } from '@angular/http';
const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:FundgettingcollegesComponent},
  {path:"show/:userid", component:ShowactionplanComponent},
  {path:"ftsummary/:userid", component:DataTableDemo3}
  ];
  
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
