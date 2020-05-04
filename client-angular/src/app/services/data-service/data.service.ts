import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // Méthode servant à faire une requête HTTP récupérant la liste des pilotes WRC
  public fetchDrivers(): Observable<any> {
    let obsDrivers: Observable<any> = this.httpClient.get("http://localhost:3000/drivers") // On envoie la requête à l'API
    return obsDrivers;
  }

  // Méthode servant à faire une requête HTTP récupérant un seul pilote grâce à son id
  public fetchDriverById(id: number) {
    let obsSingleDriver: Observable<any> = this.httpClient.get("http://localhost:3000/drivers/" + id)
    return obsSingleDriver;
  }

}
