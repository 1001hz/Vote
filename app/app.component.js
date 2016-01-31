System.register(['angular2/core', './auth/login.component', './home.component', './splash.component', './common/menu.component', './loggedInRouterOutlet.directive', 'angular2/router', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_component_1, home_component_1, splash_component_1, menu_component_1, loggedInRouterOutlet_directive_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (splash_component_1_1) {
                splash_component_1 = splash_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (loggedInRouterOutlet_directive_1_1) {
                loggedInRouterOutlet_directive_1 = loggedInRouterOutlet_directive_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <menu></menu>\n    <logged-in-router-outlet></logged-in-router-outlet>\n    ",
                        directives: [loggedInRouterOutlet_directive_1.LoggedInRouterOutlet, login_component_1.LoginComponent, home_component_1.HomeComponent, router_1.ROUTER_DIRECTIVES, menu_component_1.MenuComponent, splash_component_1.SplashComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Splash', component: splash_component_1.SplashComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map