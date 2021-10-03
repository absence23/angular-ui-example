import {Component} from '@angular/core';
import {AppService} from './app.service';
import {HttpClient} from '@angular/common/http';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {
    posts: Array<any> = [];
    error = '';

    constructor(private app: AppService, private http: HttpClient) {
        if (this.authenticated()) {
            app.getPosts((data: any) => this.posts = <Array<any>>data,
                (error: any) => this.error = error.message);
        }
    }

    authenticated() {
        return this.app.authenticated;
    }
}
