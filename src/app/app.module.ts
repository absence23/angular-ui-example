import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";

/**
 * All application components should be imported here and added
 * to 'declarations' property in @NgModule. To be able to go
 * to one of this components  you should also add them to routes array
 */
import {HomeComponent} from './home.component';
import {LoginComponent} from './login.component';
import {AppComponent} from './app.component';

/**
 * Services contain all logic for example http requests sending
 * They should be added to property 'providers' in @NgModule
 */
import {AppService} from './app.service';

/**
 * Following modules are from Angular Material UI
 * You can find all the available components on the official website
 * https://material.angular.io/
 * New modules should be added to property 'imports' in @NgModule
 */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from '@angular/material/input';


/**
 * This array contains urls and corresponding controllers
 * that will be loaded when user redirected to specified url
 * code example:
 *      <a [routerLink]="['/home']">Home</a>
 * or
 *      router.navigateByUrl('/home')
 */
const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatGridListModule,
        MatInputModule
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
