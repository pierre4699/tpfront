import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'favorite-root',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {
  plants: any = {};
  favorites: any = {};
  id: string = '1';
  showModalBox: boolean = false;

  constructor(private service:PostService, private keycloakService: KeycloakService) {}

  ngOnInit() {
    this.keycloakService.loadUserProfile().then(profile => {
      // @ts-ignore
      this.id = profile.id;

      this.service.getFavorites(this.id)
        .subscribe(response => {
          this.favorites = response;
        });

    }).catch(error => {
      console.error('Failed to load user profile', error);
    });
  }

  delFavorite(plant_id: number, user_uuid: String) {
    this.service.delFavorite(plant_id, user_uuid);
    location.reload();
  }
}
