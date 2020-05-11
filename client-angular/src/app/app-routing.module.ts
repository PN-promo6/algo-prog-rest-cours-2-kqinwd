import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { TestdrivesListComponent } from './testdrives-list/testdrives-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'drivers', pathMatch: 'full' },
  { path: 'drivers', component: DriversListComponent },
  { path: 'teams', component: TeamsListComponent },
  { path: 'posts', component: TestdrivesListComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
