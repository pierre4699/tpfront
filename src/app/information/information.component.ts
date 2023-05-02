import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  userId: string | undefined;
  userName: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  created: number | undefined;
  constructor(private keycloakService: KeycloakService) { }
  title: any;

  ngOnInit(): void {
    this.keycloakService.loadUserProfile().then(profile => {
      this.userId = profile.id;
      this.userName = profile.username;
      this.firstName = profile.firstName;
      this.lastName = profile.lastName;
      this.email = profile.email;
      this.created = profile.createdTimestamp;
    }).catch(error => {
      console.error('Failed to load user profile', error);
    });
  }
  redirectToAccountManagement(): void {
    const url = this.keycloakService.getKeycloakInstance().createAccountUrl();
    window.location.href = url;
  }
}
