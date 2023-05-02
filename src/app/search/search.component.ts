import {Component, OnInit} from '@angular/core';
import { PostService } from '../services/post.service';
import {Plant} from "../models/plant";
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'search-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  plants: any = {};
  responseMessage: string = '';
  searchText : string = "";
  title: any;
  id: string = '';

  favorites: any = {};

  constructor(private service:PostService, private keycloakService: KeycloakService) {}

  ngOnInit() {
    this.service.getPlants()
      .subscribe(response => {
        this.plants = response;
      });
    this.keycloakService.loadUserProfile().then(profile => {
      // @ts-ignore
      this.id = profile.id;
    }).catch(error => {
      console.error('Failed to load user profile', error);
    });
  }

  addPlantForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    common_name: new FormControl('', [Validators.required]),
    slug: new FormControl('', [Validators.required]),
    scientific_name: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    genus: new FormControl('', [Validators.required]),
    family: new FormControl('', [Validators.required]),
    image_url: new FormControl('', [Validators.required]),
  });

  setFavorite(plant_id: number, user_id: String) {
    this.service.setFavorite(plant_id, user_id);
    location.reload();
  }

  searchPlant() {
    if(this.searchText == ""){
      this.service.getPlants()
        .subscribe(response => {
          this.plants = response;
        });
    }else {
      this.service.searchPlant(this.searchText)
        .subscribe(response => {
          this.plants = response;
        });
    }
  }

}
