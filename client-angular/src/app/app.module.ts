import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TestdrivesListComponent } from './testdrives-list/testdrives-list.component';
import { DriverPreviewComponent } from './driver-preview/driver-preview.component';
import { TestdrivePreviewComponent } from './testdrive-preview/testdrive-preview.component';
import { TeamPreviewComponent } from './team-preview/team-preview.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DriversListComponent,
    TeamsListComponent,
    TestdrivesListComponent,
    DriverPreviewComponent,
    TestdrivePreviewComponent,
    TeamPreviewComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
