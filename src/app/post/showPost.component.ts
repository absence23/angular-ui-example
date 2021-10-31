import {Component} from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from "../../environments/environment";

@Component({
    templateUrl: './showPost.component.html'
})
export class ShowPostComponent {
    post = {text: '', title: '', id: ''};
    error: string = '';
    apiUrl = environment.apiUrl;

    constructor(private app: AppService, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
        let id = this.route.snapshot.paramMap.get('id');
        this.app.getPost(id, (data: any) => this.post = data,
            (error: any) => this.error = error);
    }
}
