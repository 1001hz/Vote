import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction, Location} from 'angular2/router';
import {StateService} from './common/state.service';
import {User} from './auth/user.entity';

@Directive({
    selector: 'logged-in-router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
    publicRoutes: any;
    private parentRouter: Router;
    private user: User;

    constructor(
        _elementRef: ElementRef,
        _loader: DynamicComponentLoader,
        _parentRouter: Router,
        @Attribute('name') nameAttr: string,
        private stateService: StateService) {

        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;
        this.publicRoutes = {
            '/login': true,
            '': true
        };
        this.stateService.user$.subscribe(dataStore => this.user = dataStore.user);
    }


    activate(instruction: ComponentInstruction) {

        if (!this.publicRoutes[instruction.urlPath] && !this.user) {
            this.parentRouter.navigateByUrl('/login');
        }

        return super.activate(instruction);
    }

}