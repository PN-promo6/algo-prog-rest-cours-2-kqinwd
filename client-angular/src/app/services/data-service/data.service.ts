import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Driver } from 'src/app/models/driver/driver';
import { Team } from 'src/app/models/team/team';
import { Testdrive } from 'src/app/models/testdrive/testdrive';

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

  // Méthode servant à faire une requête HTTP récupérant la listes des équipes
  public fetchTeams(): Observable<Team[]> {
    let obsTeams: Observable<Team[]> = this.httpClient.get<Team[]>("http://localhost:3000/teams")
    return obsTeams;
  }

  // Méthode servant à faire une requête HTTP récupérant la listes des vidéos d'essais
  public fetchTestDrives(): Observable<Testdrive[]> {
    let obsTestdrive: Observable<Testdrive[]> = this.httpClient.get<Testdrive[]>("http://localhost:3000/testdrives")
    return obsTestdrive;
  }

}
