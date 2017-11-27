import { Component, OnInit } from '@angular/core';
import { Excercise } from './../classes/excercise';
import { Serie } from './../classes/serie';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html'
})
export class NewTrainingComponent implements OnInit {

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
		weight: 0,
		reps: 0
	};

	serieId = 1;
	createNew = false;

	constructor(
		private location: Location,
	){}

	ngOnInit() {

	}

	setNewExcercise(arg){
		this.newExcercise = arg;
		this.createNew = false;
	}

	addSerie(){
		this.newExcercise.series.push({
			id: this.serieId,
			weight: this.newSerie.weight,
			reps: this.newSerie.reps
		});
		this.serieId++;
	}

	addExcercise(){
		this.trainingExcercises.push({
			id: this.newExcercise.id,
			name: this.newExcercise.name,
			series: this.newExcercise.series
		});
		this.newExcercise.series = [];
		this.newExcercise.name = 'Choose excercise...',
		this.newExcercise.id++;
		this.newSerie.weight = 0;
		this.newSerie.reps = 0;
	}

	showInput(){
		this.createNew = true;
	}

	goBack(): void{
		this.location.back();
	}

}
