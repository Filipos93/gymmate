import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TrainingService } from './../../services/training/training.service';
import { Training } from './../../classes/training';

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
		this.trainingService.get().subscribe(data=>{
			this.trainings = data;
			console.log(this.trainings);
		});
	}

	goBack(): void{
		this.location.back();
	}

}
