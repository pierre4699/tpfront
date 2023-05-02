import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {FavoriteComponent} from "./favorite/favorite.component";
import {SearchComponent} from "./search/search.component";
import {AuthGuard} from "./auth.guard";
import {InformationComponent} from "./information/information.component";

const routes: Routes = [
  { path: '',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  { path: 'favorite', component: FavoriteComponent,
    canActivate: [AuthGuard]},
  { path: 'info', component: InformationComponent,
    canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
