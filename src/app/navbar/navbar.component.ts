import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userId: string | undefined;
  userName: string | undefined;
  constructor(private keycloakService: KeycloakService) { }
  title: any;

  ngOnInit(): void {
    this.userId = this.keycloakService.getKeycloakInstance().subject;
    this.keycloakService.loadUserProfile().then(profile => {
      this.userName = profile.username;
    }).catch(error => {
      console.error('Failed to load user profile', error);
    });
  }

  logout() {
    this.keycloakService.logout();
  }


}
