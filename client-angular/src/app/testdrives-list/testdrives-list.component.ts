import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';
import { Testdrive } from '../models/testdrive/testdrive';

@Component({
  selector: 'app-testdrives-list',
  templateUrl: './testdrives-list.component.html',
  styleUrls: ['./testdrives-list.component.css']
})
export class TestdrivesListComponent implements OnInit {

  public testdrives: Testdrive[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.fetchTestDrives()
      .subscribe( // On souscrit à l'observable
        res => {
          console.log(res); // On affiche en console la réponse
          this.testdrives = res; // On affecte la réponse à la variable drivers
        },
        error => {
          console.log(error) // Si erreur, on affiche en console l'erreur

        }
      );
  }

}
