import {NgModule} 			   from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';

const appRoutes: Routes = [
	{
        path:"",
        component: LoginComponent,
    },
    {
        path:"tweet_list",
        component: TweetListComponent,
    },
    {
        path:"logout",
        component: LogoutComponent,
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