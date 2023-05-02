import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FavoriteComponent} from "./favorite.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    FavoriteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FavoriteComponent]
})
export class FavoriteModule { }
