import { Component, Input, OnInit } from '@angular/core';
import { Excercise } from './../../classes/excercise';

@Component({
	selector: 'app-excercise',
	templateUrl: './excercise.component.html',
	styleUrls: ['./excercise.component.scss']
})
export class ExcerciseComponent implements OnInit {

	show = false;

	@Input() excercise: Excercise;

	constructor() { }

	ngOnInit() {
	}

	toggle():void{
		this.show = !this.show;
	}

}
