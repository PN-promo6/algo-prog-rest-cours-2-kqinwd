import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';
import { Driver } from '../models/driver/driver';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  public drivers: Driver[];
  public singleDriver: Driver[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.fetchDrivers()
      .subscribe( // On souscrit à l'observable
        res => {
          console.log(res); // On affiche en console la réponse
          this.drivers = res; // On affecte la réponse à la variable drivers
        },
        error => {
          console.log(error) // Si erreur, on affiche en console l'erreur

        }
      );

    this.dataService.fetchDriverById("1") // On doit passer en paramètre un id puisqu'on a défini la fonction avec un paramètre dans le DataService
      .subscribe(
        res => {
          console.log(res);
          this.singleDriver = res;
        },
        error => {
          console.log(error)

        }
      )
  }
}
