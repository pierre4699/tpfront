import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {NavbarComponent} from "./navbar/navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {SearchComponent} from "./search/search.component";
import {FavoriteComponent} from "./favorite/favorite.component";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {KeycloakAuthService} from "./keycloak-auth.service";
import {AuthGuard} from "./auth.guard";

function initializeKeycloak(keycloak: KeycloakService){
  return() =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/',
        realm: 'tp_angular',
        clientId: 'angular-client',
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
      },
      bearerExcludedUrls: [],
    });
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  exports:[
    NavbarComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    AuthGuard,
    KeycloakAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
