import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SearchComponent } from './search.component';
import { HttpClientModule } from '@angular/common/http';
import {NavbarComponent} from "../navbar/navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from '../app-routing.module';
import {NavbarModule} from "../navbar/navbar.module";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [SearchComponent]
})
export class SearchModule { }
