import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../models/team/team';

@Component({
  selector: 'app-team-preview',
  templateUrl: './team-preview.component.html',
  styleUrls: ['./team-preview.component.css']
})
export class TeamPreviewComponent implements OnInit {

  @Input() team: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
