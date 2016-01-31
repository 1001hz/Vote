System.register(['angular2/core', '../auth/user.entity', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_entity_1, Observable_1;
    var StateService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_entity_1_1) {
                user_entity_1 = user_entity_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            StateService = (function () {
                function StateService() {
                    var _this = this;
                    // Create Observable Stream to output our data
                    this.user$ = new Observable_1.Observable(function (observer) {
                        _this._todosObserver = observer;
                    }).share();
                    this._dataStore = { user: user_entity_1.User };
                }
                StateService.prototype.setUser = function (user) {
                    this._dataStore.user = user;
                    this._todosObserver.next(this._dataStore);
                };
                StateService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], StateService);
                return StateService;
            })();
            exports_1("StateService", StateService);
        }
    }
});
//# sourceMappingURL=state.service.js.map