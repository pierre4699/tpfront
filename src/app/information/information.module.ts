import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {InformationComponent} from "./information.component";

@NgModule({
  declarations: [
    InformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [InformationComponent]
})
export class InformationModule { }
