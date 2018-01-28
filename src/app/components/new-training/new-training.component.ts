import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Excercise } from './../../classes/excercise';
import { Serie } from './../../classes/serie';
import { Training } from './../../classes/training';
import { Location } from '@angular/common';
import { NotificationsService } from 'angular2-notifications';
import { TrainingService } from './../../services/training/training.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html'
})
export class NewTrainingComponent implements OnInit {

	show = false;

	toggleTab(){
		this.show = !this.show;
	}

	userExcercises = [
		{name: 'Squats'},
		{name: 'Bench press'},
		{name: 'Dead Lift'}
	];

	trainingExcercises : Excercise[] = [];

	newExcercise: Excercise = {
		name: null,
		series: []
	};

	newSerie: Serie = {
		id: 0,
		weight: null,
		reps: null
	};

	serieId = 1;
	createNew = false;

	weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	trainingDate: Date = new Date();
	trainingName = `${this.weekDays[this.trainingDate.getDay()]} Training`;
	

	public NotificationOptions = {
		timeOut: 1000,
		showProgressBar: false,
		pauseOnHover: true,
		clickToClose: true
	}

	constructor(
		private location: Location,
		private notify: NotificationsService,
		private trainingService: TrainingService,
		private router: Router
	){}

	ngOnInit() {

	}

	setNewExcercise(arg){
		this.newExcercise.name = arg.name;
		this.createNew = false;
	}

	// receive training Date on date-picker input change
	receiveDate($event) {
		this.trainingDate = $event
		console.log(this.trainingDate.getDay());
	}

	addSerie(){
		if(this.newSerie.weight!=null && this.newSerie.reps!=null){
			this.newExcercise.series.push({
				id: this.serieId,
				weight: this.newSerie.weight,
				reps: this.newSerie.reps
			});
			this.serieId++;
			this.newSerie.weight = null;
			this.newSerie.reps = null;
			this.notify.success('Serie added!', '', {});
		}
		else{
			this.notify.error('Error', 'Weight and reps cannot be 0!', {});
		}
	}

	addExcercise(){
		
		if(this.newExcercise.series.length==0){
			return this.notify.error('Error', 'First add some series.', {});
		}

		if(!this.newExcercise.name){
			return this.notify.error('Error', 'Choose an excercise name!', {});
		}

		this.trainingExcercises.push({
			name: this.newExcercise.name,
			series: this.newExcercise.series
		});

		this.clearExcercise();
		this.notify.success('Excercise added!', '', {});
	}

	saveTraining(){
		if(this.trainingExcercises.length>0){

			this.trainingService.create({
				name: this.trainingName,
				excercises: this.trainingExcercises,
				date: this.trainingDate
			});
			this.router.navigateByUrl('/view-trainings');
		}
		else{
			this.notify.error('Error', 'First add some excercises.', {});
		}
		console.log('save');
		
	}

	clearExcercise(){
		this.newExcercise.series = [];
		this.newExcercise.name = null,
		this.newSerie.weight = null;
		this.newSerie.reps = null;
	}

	clearTraining(){
		this.clearExcercise();
		this.trainingExcercises = [];
	}

	showInput(){
		this.createNew = true;
		this.newExcercise.name = null;
	}

	goBack(): void{
		this.location.back();
	}

}
