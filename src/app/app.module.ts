import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { ChartsComponent } from './charts/charts.component';
import { ViewTrainingsComponent } from './view-trainings/view-trainings.component';
import { NewMeasurmentComponent } from './new-measurment/new-measurment.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { OnlyNumberDirective } from './directives/only-number.directive';



@NgModule({
	declarations: [
		AppComponent,
		NewTrainingComponent,
		ChartsComponent,
		ViewTrainingsComponent,
		NewMeasurmentComponent,
		MainMenuComponent,
		OnlyNumberDirective
	],
	imports: [
		BrowserModule,
		RouterModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		SimpleNotificationsModule.forRoot() 
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
