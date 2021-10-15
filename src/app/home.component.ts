import {Component} from '@angular/core';
import {AppService} from './app.service';
import {HttpClient} from '@angular/common/http';
import {environment} from "../environments/environment";

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {
    posts: Array<any> = [];
    error = '';
    apiUrl = environment.apiUrl;

    constructor(private app: AppService, private http: HttpClient) {
        app.getPosts((data: any) => this.posts = <Array<any>>data,
            (error: any) => this.error = error.message);
    }

    authenticated() {
        return this.app.authenticated;
    }
}
