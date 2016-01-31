import {Component} from 'angular2/core';
import {AuthService} from './auth.service';
import {User} from './user.entity';
import {StateService} from '../common/state.service';

@Component({
    selector: 'login',
    template:`
    <div *ngIf="!user && showSignIn">
        <h2>Sign In</h2>
        <input type="text" #username placeholder="username" />
        <input type="password" #password placeholder="password" />
        <button (click)="login(username, password)">Sign in</button>
        <button (click)="toggleView()">Sign Up</button>
    </div>

    <div *ngIf="!user && showSignUp">
        <h2>Sign Up</h2>
        <input type="text" #newUsername placeholder="Username" />
        <input type="password" #newPassword placeholder="Password" />
        <input type="password" #newPasswordConfirm placeholder="Confirm password" />
        <button (click)="signUp(newUsername, newPassword, newPasswordConfirm)">Sign Up</button>
        <button (click)="toggleView()">Sign in</button>
    </div>

    <div *ngIf="error">
        <p>{{error}}</p>
    </div>

    <div *ngIf="user">
        <p>You are logged in as <strong>{{user.username}}</strong></p>
    </div>
    `,
    providers:[AuthService]
})
export class LoginComponent{

    public user : User;
    public error : string;
    public showSignUp : boolean;
    public showSignIn : boolean;

    constructor(private authService: AuthService, public stateService: StateService) {
        this.showSignIn = true;
    }

    ngOnInit() {
        this.stateService.user$.subscribe(dataStore => this.user = dataStore.user);
    }

    // user actions =====================

    login(username: HTMLInputElement, password: HTMLInputElement){
        this.authService.login(username.value, password.value)
            .subscribe(
                user => this.stateService.setUser(user),
                err => this.error = err.message
        )
    }

    signUp(username: HTMLInputElement, password: HTMLInputElement, passwordConfirm: HTMLInputElement){
        if(passwordConfirm === password){
            this.authService.signUp(username.value, password.value)
                .subscribe(
                    user => this.stateService.setUser(user),
                    err => this.error = err.message
            )
        }
        else{
            this.error = "Passwords do not match";
        }
    }

    toggleView(){
        this.error = null;
        this.showSignIn = !this.showSignIn;
        this.showSignUp = !this.showSignUp;
    }

    // end user actions ======================


}
