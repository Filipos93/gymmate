import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { ChartsComponent } from './charts/charts.component';
import { ViewTrainingsComponent } from './view-trainings/view-trainings.component';
import { NewMeasurmentComponent } from './new-measurment/new-measurment.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

import { TrainingService } from './training.service';

import { OnlyNumberDirective } from './directives/only-number.directive';



@NgModule({
	declarations: [
		AppComponent,
		NewTrainingComponent,
		ChartsComponent,
		ViewTrainingsComponent,
		NewMeasurmentComponent,
		MainMenuComponent,
		OnlyNumberDirective,
		DatePickerComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
		HttpModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		SimpleNotificationsModule.forRoot(),
		MatDatepickerModule,
		MatFormFieldModule,
		MatNativeDateModule,
		MatInputModule
	],
	providers: [TrainingService],
	bootstrap: [AppComponent]
})
export class AppModule { }
