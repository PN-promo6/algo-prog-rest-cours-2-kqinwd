import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';
import { Team } from '../models/team/team';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  public teams: Team[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.fetchTeams()
      .subscribe( // On souscrit à l'observable
        res => {
          console.log(res); // On affiche en console la réponse
          this.teams = res; // On affecte la réponse à la variable drivers
        },
        error => {
          console.log(error) // Si erreur, on affiche en console l'erreur

        }
      );
  }

}
