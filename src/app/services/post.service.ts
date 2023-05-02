import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import { Plant} from "../models/plant";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:8081/';


  constructor(private httpClient: HttpClient) { }

  getPlants(){
    return this.httpClient.get(this.url + 'plant/all');
  }

  getFavorites(id : String){
    return this.httpClient.get(this.url + "favorites?data=" + id);
  }

  addPlant(plant:Plant): Observable<any> {
    const headers = {'Access-Control-Allow-Origin':'*', 'content-type': 'application/json'}
    const body=JSON.stringify(plant);
    console.log(body)
    return this.httpClient.post(this.url + "plant", body, {headers:headers})
  }

  searchPlant(searchText: any){
    return this.httpClient.get(this.url + "search?data=" + searchText);
  }

  setFavorite(plant_id: number, user_uuid: String){

    const headers = {'Access-Control-Allow-Origin':'*', 'content-type': 'application/json'};
    const body = {"plant_id": plant_id, "user_uuid": user_uuid };
    this.httpClient.post<any>(this.url + 'favorite', body, { headers }).subscribe(data => {
    });
  }

  delFavorite(plant_id: number, user_uuid: String){

    const headers = {'Access-Control-Allow-Origin':'*', 'content-type': 'application/json'};
    const body = {"plant_id": plant_id, "user_uuid": user_uuid };
    this.httpClient.post<any>(this.url + 'delfavorite', body, { headers }).subscribe(data => {
    });
  }


}
