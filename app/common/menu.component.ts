import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterLink, Router} from 'angular2/router';
import {AuthService} from '../auth/auth.service';
import {User} from './user.entity';
import {StateService} from '../common/state.service';


@Component({
    selector: 'menu',
    template:`
    <ul>
        <li *ngIf="!user"><a [routerLink]="['Login']">Login</a></li>
        <li *ngIf="user"><a [routerLink]="['Home']">Home</a></li>
        <li *ngIf="user" (click)="signOut()">Sign {{user.username}} out</li>
    </ul>
    `,
    providers:[AuthService],
    directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit{
    public user : User;

    constructor(private stateService: StateService, private router: Router) {

    }

    ngOnInit() {
        this.stateService.user$.subscribe(dataStore => this.user = dataStore.user);
    }

    signOut(){
        this.stateService.setUser(null);
        this.router.navigate(['Splash']);
    }
}
