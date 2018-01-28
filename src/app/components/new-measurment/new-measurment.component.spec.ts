import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMeasurmentComponent } from './new-measurment.component';

describe('NewMeasurmentComponent', () => {
  let component: NewMeasurmentComponent;
  let fixture: ComponentFixture<NewMeasurmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMeasurmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMeasurmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
