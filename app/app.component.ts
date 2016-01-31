import {Component, Directive} from 'angular2/core';
import {LoginComponent} from './auth/login.component';
import {HomeComponent} from './home.component';
import {SplashComponent} from './splash.component';
import {MenuComponent} from './common/menu.component';
import {LoggedInRouterOutlet} from './loggedInRouterOutlet.directive';
import {RouteConfig, ROUTER_DIRECTIVES, RouterOutlet, RouterLink, Router} from 'angular2/router';
import {StateService} from './common/state.service';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template:`
    <menu></menu>
    <logged-in-router-outlet></logged-in-router-outlet>
    `,
    directives: [LoggedInRouterOutlet,LoginComponent,HomeComponent, ROUTER_DIRECTIVES, MenuComponent, SplashComponent]
})
@RouteConfig([
    {path:'/', name: 'Splash', component: SplashComponent},
    {path:'/login', name: 'Login', component: LoginComponent},
    {path:'/home', name: 'Home', component: HomeComponent}
])
export class AppComponent{
    constructor() {
    }

}