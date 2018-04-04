import {NgModule} 			   from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
	{
        path:"",
        component: LoginComponent,
    } 
]

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes
			)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}