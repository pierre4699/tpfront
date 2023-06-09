import {Component, OnInit} from '@angular/core';
import { PostService } from './services/post.service';
import {Plant} from "./models/plant";
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  plants: any = {};
  responseMessage: string = '';
  searchText : string = "";

  constructor(private service:PostService) {}

  ngOnInit() {
    this.service.getPlants()
      .subscribe(response => {
        this.plants = response;
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

  addPlant() {
    const plant: Plant = this.addPlantForm.value as Plant;
    this.service.addPlant(plant).subscribe((response: any) => {
      console.log(response);
      this.responseMessage = 'Musique ajoutée avec succès !'; // Mise à jour de la réponse
    }, error => {
      console.log(error);
      this.responseMessage = 'Erreur lors de l\'ajout de la musique'; // Gestion des erreurs
    });
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
