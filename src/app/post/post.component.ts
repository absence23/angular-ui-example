import {Component} from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    templateUrl: './post.component.html'
})
export class PostComponent {
    error = '';
    imageName = 'Choose file...';
    image = null;
    post = {title: null, text: null, image: null};

    constructor(private app: AppService, private http: HttpClient, private router: Router) {
    }

    addPost() {
        this.app.addPost(this.post, this.image, () => {
            this.router.navigateByUrl('/');
        }, (error: any) => {
            this.error = error.message;
        });
    }

    uploadFileEvt(imgFile: any) {
        if (imgFile.target.files && imgFile.target.files[0]) {
            this.image = imgFile.target.files[0];
            this.imageName = imgFile.target.files[0].name;
        } else {
            this.imageName = 'Choose file...';
        }
    }
}
