import { Component, OnInit } from '@angular/core';
import { Excercise } from './../classes/excercise';
import { Serie } from './../classes/serie';
import { Location } from '@angular/common';
import { NotificationsService } from 'angular2-notifications';
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

	trainingExcercises: Excercise[] = [
		{
			id: 0,
			name: 'Squats',
			series: [
				{
					id: 1,
					weight: 60,
					reps: 5
				},
				{
					id: 2,
					weight: 60,
					reps: 5
				},
				{
					id: 3,
					weight: 60,
					reps: 5
				}
			]
		}
	];

	newExcercise: Excercise = {
		id: 0,
		name: 'Choose excercise...',
		series: []
	};

	newSerie: Serie = {
		id: 0,
		weight: null,
		reps: null
	};

	serieId = 1;
	createNew = false;

	public NotificationOptions = {
		timeOut: 1000,
		showProgressBar: false,
		pauseOnHover: true,
		clickToClose: true
	}

	constructor(
		private location: Location,
		private notify: NotificationsService,
	){}

	ngOnInit() {

	}

	setNewExcercise(arg){
		this.newExcercise.name = arg.name;
		this.createNew = false;
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
		if(this.newExcercise.series.length>0){
			this.trainingExcercises.push({
				id: this.newExcercise.id,
				name: this.newExcercise.name,
				series: this.newExcercise.series
			});
			this.newExcercise.series = [];
			this.newExcercise.name = 'Choose excercise...',
			this.newExcercise.id++;
			this.newSerie.weight = null;
			this.newSerie.reps = null;
			this.notify.success('Excercise added!', '', {});
		}
		else{
			this.notify.error('Error', 'First add some series.', {});
		}

	}

	saveTraining(){
		console.log('save training');
	}

	showInput(){
		this.createNew = true;
	}

	goBack(): void{
		this.location.back();
	}

}
