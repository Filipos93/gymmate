import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(
		private location: Location,
	){}

	ngOnInit() {
	}

	goBack(): void{
		this.location.back();
	}

}
