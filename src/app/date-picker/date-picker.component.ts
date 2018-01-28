import {Component, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Basic datepicker */
@Component({
  selector: 'app-date-picker',
  templateUrl: 'date-picker.component.html'
})
export class DatePickerComponent {
	date = new FormControl(new Date());

	@Output() messageEvent = new EventEmitter<FormControl>();

	sendDate($event) {
		this.messageEvent.emit($event.value);
	}
}
