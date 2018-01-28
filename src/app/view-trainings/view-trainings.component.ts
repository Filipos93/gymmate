import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TrainingService } from './../training.service';
import { Training } from './../classes/training';

@Component({
	selector: 'app-view-trainings',
	templateUrl: './view-trainings.component.html',
	styleUrls: ['./view-trainings.component.css'],
})
	
export class ViewTrainingsComponent implements OnInit {

	trainings: Training[];

	constructor(
		private location: Location,
		private trainingService: TrainingService
	){}

	ngOnInit() {
		this.getTrainings();
		console.log(this.trainings);
	}

	getTrainings(): void {
		this.trainingService.get().then(trainings => this.trainings = trainings);
	}

	goBack(): void{
		this.location.back();
	}

}
