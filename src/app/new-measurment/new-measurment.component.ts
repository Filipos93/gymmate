import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-measurment',
  templateUrl: './new-measurment.component.html',
  styleUrls: ['./new-measurment.component.css']
})
export class NewMeasurmentComponent implements OnInit {

  constructor(
		private location: Location,
	){}

	ngOnInit() {
	}

	goBack(): void{
		this.location.back();
	}

}
