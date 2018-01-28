import { Injectable } from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Training } from './classes/training';

@Injectable()
export class TrainingService {

	private trainingsUrl = 'http://localhost:3000/api/trainings';  // URL to web api

	constructor(private http: Http) { }
	 
	get(): Promise<Training[]> {
		return this.http.get(this.trainingsUrl)
		.toPromise()
		.then(response => response.json().data as Training[])
		// .catch( error => this.handleError(error));
	}

	create(training){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post(this.trainingsUrl, JSON.stringify(training), {headers: headers})
		.toPromise()
		.then(response => response.json().data as Training[]);
		// .catch( error => this.handleError(error));
	}
	 
	// private handleError(error: any): Promise<any> {
	//   return console.log(error);
	// }
	
}
