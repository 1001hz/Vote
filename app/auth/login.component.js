System.register(['angular2/core', './auth.service', '../common/state.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, auth_service_1, state_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (state_service_1_1) {
                state_service_1 = state_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(authService, stateService) {
                    this.authService = authService;
                    this.stateService = stateService;
                    this.showSignIn = true;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.stateService.user$.subscribe(function (dataStore) { return _this.user = dataStore.user; });
                };
                // user actions =====================
                LoginComponent.prototype.login = function (username, password) {
                    var _this = this;
                    this.authService.login(username.value, password.value)
                        .subscribe(function (user) { return _this.stateService.setUser(user); }, function (err) { return _this.error = err.message; });
                };
                LoginComponent.prototype.signUp = function (username, password, passwordConfirm) {
                    var _this = this;
                    if (passwordConfirm === password) {
                        this.authService.signUp(username.value, password.value)
                            .subscribe(function (user) { return _this.stateService.setUser(user); }, function (err) { return _this.error = err.message; });
                    }
                    else {
                        this.error = "Passwords do not match";
                    }
                };
                LoginComponent.prototype.toggleView = function () {
                    this.error = null;
                    this.showSignIn = !this.showSignIn;
                    this.showSignUp = !this.showSignUp;
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        template: "\n    <div *ngIf=\"!user && showSignIn\">\n        <h2>Sign In</h2>\n        <input type=\"text\" #username placeholder=\"username\" />\n        <input type=\"password\" #password placeholder=\"password\" />\n        <button (click)=\"login(username, password)\">Sign in</button>\n        <button (click)=\"toggleView()\">Sign Up</button>\n    </div>\n\n    <div *ngIf=\"!user && showSignUp\">\n        <h2>Sign Up</h2>\n        <input type=\"text\" #newUsername placeholder=\"Username\" />\n        <input type=\"password\" #newPassword placeholder=\"Password\" />\n        <input type=\"password\" #newPasswordConfirm placeholder=\"Confirm password\" />\n        <button (click)=\"signUp(newUsername, newPassword, newPasswordConfirm)\">Sign Up</button>\n        <button (click)=\"toggleView()\">Sign in</button>\n    </div>\n\n    <div *ngIf=\"error\">\n        <p>{{error}}</p>\n    </div>\n\n    <div *ngIf=\"user\">\n        <p>You are logged in as <strong>{{user.username}}</strong></p>\n    </div>\n    ",
                        providers: [auth_service_1.AuthService]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, state_service_1.StateService])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map