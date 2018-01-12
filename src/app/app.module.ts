import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { FtinfoService } from './ftinfo.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule} from '@angular/common';
import { Uploader }      from 'angular2-http-file-upload';
import { DataTableDemo3 } from './fundtrackersummary/data-table-demo3';
import { AppComponent } from './app.component';
import { FundgettingcollegesComponent } from './fundgettingcolleges/fundgettingcolleges.component';
import { GetfundgettersService } from './getfundgetters.service';
import { ShowactionplanComponent } from './showactionplan/showactionplan.component';
@NgModule({
  declarations: [
    AppComponent,
    FundgettingcollegesComponent,
    ShowactionplanComponent,
     DataTableDemo3,
     
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    CommonModule
  ],
  providers: [GetfundgettersService,Uploader,FtinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
