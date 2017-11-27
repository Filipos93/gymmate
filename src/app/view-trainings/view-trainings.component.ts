import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-view-trainings',
	templateUrl: './view-trainings.component.html',
	styleUrls: ['./view-trainings.component.css']
})
	
export class ViewTrainingsComponent implements OnInit {

	constructor(
		private location: Location,
	){}

	ngOnInit() {
	}

	goBack(): void{
		this.location.back();
	}

}
