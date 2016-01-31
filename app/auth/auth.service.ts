import {Injectable} from 'angular2/core';
import {User} from './user.entity';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class AuthService {
    public user : User;
    public http;

    constructor(public http: Http) {
        this.http = http;
    }

    login(username, password){

        var creds = "username=" + username + "&password=" + password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.put('/api/user', creds, {
            headers: headers
            })
            .map((response) => this.makeUser(response));

    }

    signUp(username, password){

        var creds = "username=" + username + "&password=" + password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('/api/user', creds, {
            headers: headers
        })
            .map((response) => this.makeUser(response));

    }

    makeUser(data) {
        this.user = new User(data);
        return this.user;
    }

}