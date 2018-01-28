import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent }   from './app.component';
import { MainMenuComponent }   from './components/main-menu/main-menu.component';
import { NewTrainingComponent }   from './components/new-training/new-training.component';
import { NewMeasurmentComponent }      from './components/new-measurment/new-measurment.component';
import { ViewTrainingsComponent }  from './components/view-trainings/view-trainings.component';
import { ChartsComponent } from './components/charts/charts.component';

 
const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home',  component: MainMenuComponent },
	{ path: 'new-training', component: NewTrainingComponent },
	{ path: 'new-measurment', component: NewMeasurmentComponent },
	{ path: 'view-trainings', component: ViewTrainingsComponent },
	{ path: 'charts', component: ChartsComponent }
];
 
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}