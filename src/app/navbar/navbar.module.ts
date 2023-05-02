import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NavbarComponent} from './navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class NavbarModule { }
