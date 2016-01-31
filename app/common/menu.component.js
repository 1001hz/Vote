System.register(['angular2/core', 'angular2/router', '../auth/auth.service', '../common/state.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, auth_service_1, state_service_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (state_service_1_1) {
                state_service_1 = state_service_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent(stateService, router) {
                    this.stateService = stateService;
                    this.router = router;
                }
                MenuComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.stateService.user$.subscribe(function (dataStore) { return _this.user = dataStore.user; });
                };
                MenuComponent.prototype.signOut = function () {
                    this.stateService.setUser(null);
                    this.router.navigate(['Splash']);
                };
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'menu',
                        template: "\n    <ul>\n        <li *ngIf=\"!user\"><a [routerLink]=\"['Login']\">Login</a></li>\n        <li *ngIf=\"user\"><a [routerLink]=\"['Home']\">Home</a></li>\n        <li *ngIf=\"user\" (click)=\"signOut()\">Sign {{user.username}} out</li>\n    </ul>\n    ",
                        providers: [auth_service_1.AuthService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [state_service_1.StateService, router_1.Router])
                ], MenuComponent);
                return MenuComponent;
            })();
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map