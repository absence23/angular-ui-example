import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../environments/environment";

@Injectable()
export class AppService {
    authenticated = false;

    constructor(private http: HttpClient) {
    }

    logout(successCallback: any, failureCallback: any) {
        this.sendRequest(`${environment.apiUrl}/logout`, {}, {}, 'post', (response: any) => {
            this.authenticated = false;
            return successCallback && successCallback(response);
        }, (e: any) => {
            return failureCallback && failureCallback(e.error);
        });
    }

    /**
     * [DOC]
     * Sends request to '/auth' with basic authentication.
     * Boolean result of authentication is written to the variable 'authenticated'
     * It's encodes string 'username:password' with Base64 and adds it to the headers
     *      Authorization: Basic <username:password>
     * @param credentials - object with username and password for authentication
     *      {
     *          username: 'user',
     *          password: 'user'
     *      }
     * @param successCallback - method that is called on success login
     * @param failureCallback - method that is called on failure
     */
    authenticate(credentials: any, successCallback: any, failureCallback: any) {
        const headers = new HttpHeaders(credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.sendRequest(`${environment.apiUrl}/api/auth`, {}, headers, 'post', (response: any) => {
            this.authenticated = true;
            return successCallback && successCallback(response);
        }, (e: any) => {
            this.authenticated = false;
            return failureCallback && failureCallback(e.error);
        });
    }

    /**
     * [DOC]
     * Sends request to '/post' to get all posts.
     * Authentication is available with cookie that is saved in browser for this domain.
     * @param successCallback - method that is called on success
     * @param failureCallback - method that is called on failure
     */
    getPosts(successCallback: any, failureCallback: any) {
        this.sendRequest(`${environment.apiUrl}/api/post`, {}, {}, 'get', (response: any) => {
            return successCallback && successCallback(response);
        }, (e: any) => {
            return failureCallback && failureCallback(e.error);
        });
    }

    getPost(id: any, successCallback: any, failureCallback: any) {
        this.sendRequest(`${environment.apiUrl}/api/post/${id}`, {}, {}, 'get', (response: any) => {
            return successCallback && successCallback(response);
        }, (e: any) => {
            return failureCallback && failureCallback(e.error);
        });
    }

    /**
     * [DOC]
     * Sends request to '/post' for adding the post.
     * Authentication is available with cookie that is saved in browser for this domain.
     * @param post - post object with following structure
     *      {
     *          title: 'Some Title',
     *          text: 'Some Text'
     *      }
     * @param successCallback - method that is called on success
     * @param failureCallback - method that is called on failure
     */
    addPost(post: any, image: any, successCallback: any, failureCallback: any) {
        const formData: FormData = new FormData();
        formData.append('post', new Blob([JSON.stringify(post)], {
            type: "application/json"
        }));
        formData.append('file', image);
        this.sendRequest(`${environment.apiUrl}/api/post`, formData, {}, 'post', (response: any) => {
            return successCallback && successCallback(response);
        }, (e: any) => {
            return failureCallback && failureCallback(e.error);
        });
    }


    /**
     * [DOC]
     * Send HTTP request. 'withCredentials' allows to set JSESSIONID from response cookies
     * and to request cookies.
     * This code uses JS promises, you can find more info here
     * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
     */
    private sendRequest(url: string, body: object, headers: object, method: string, successCallback: any, failureCallback: any) {
        let options: object = {
            body: body,
            headers: headers,
            withCredentials: true
        };
        this.http.request(method, url, options)
            .toPromise()
            .then((response: any) => {
                return successCallback && successCallback(response);
            }).catch((e) => {
                return failureCallback && failureCallback(e);
            }
        );
    }
}
