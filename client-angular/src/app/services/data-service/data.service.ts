import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Driver } from 'src/app/models/driver/driver';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // Méthode servant à faire une requête HTTP récupérant la liste des pilotes WRC
  public fetchDrivers(): Observable<Driver[]> { // On type l'observable avec le type Driver[] défini dans model/driver/driver.ts
    let obsDrivers: Observable<Driver[]> = this.httpClient.get<Driver[]>("http://localhost:3000/drivers") // On envoie la requête à l'API
    return obsDrivers;
  }

  // Méthode servant à faire une requête HTTP récupérant un seul pilote grâce à son id
  public fetchDriverById(id: string): Observable<Driver[]> {
    let obsSingleDriver: Observable<Driver[]> = this.httpClient.get<Driver[]>("http://localhost:3000/drivers/" + id)
    return obsSingleDriver;
  }

}
