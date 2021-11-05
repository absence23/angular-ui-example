import {Component} from '@angular/core';
import {AppService} from './app.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

/**
 * [DOC]
 * 'Router' component is used for navigation like attribute 'routerLink' in HTML.
 * You can specify URL to navigate in method 'navigateByUrl'
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private app: AppService, private http: HttpClient, private router: Router) {
        this.app.authenticate(undefined, () => this.router.navigateByUrl('/home'),
            () => this.router.navigateByUrl('/login'));
    }

    logout() {
        this.app.logout(() => this.router.navigateByUrl('/home'), undefined);
    }

    authenticated() {
        return this.app.authenticated;
    }
}
