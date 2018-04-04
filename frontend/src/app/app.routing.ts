import {NgModule} 			   from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';

const appRoutes: Routes = [
	{
        path:"",
        component: LoginComponent,
        canActivate: [LoginRedirect]
    },
    {
        path:"tweet_list",
        component: TweetListComponent,
        canActivate: [EnsureAuthenticated]
    },
    {
        path:"logout",
        component: LogoutComponent,
        canActivate: [EnsureAuthenticated]
    },
    {
        path:"**",
        component: NotFoundComponent,
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