import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { ChartsComponent } from './charts/charts.component';
import { ViewTrainingsComponent } from './view-trainings/view-trainings.component';
import { NewMeasurmentComponent } from './new-measurment/new-measurment.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTrainingComponent,
    ChartsComponent,
    ViewTrainingsComponent,
    NewMeasurmentComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
