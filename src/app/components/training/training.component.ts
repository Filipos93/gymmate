import { Component, Input, OnInit } from '@angular/core';
import { Training } from './../../classes/training';

@Component({
	selector: 'app-training',
	templateUrl: './training.component.html',
	styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

	show = false;

	@Input() training: Training;

	constructor() { }

	ngOnInit() {
	}

	toggle():void{
		this.show = !this.show;
	}

}
