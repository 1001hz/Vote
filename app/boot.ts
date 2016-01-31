import {bootstrap}    from 'angular2/platform/browser'
import {Http, Headers, HTTP_BINDINGS} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import { ROUTER_PROVIDERS } from 'angular2/router';
import {AppComponent} from './app.component';
import {StateService} from './common/state.service';
bootstrap(AppComponent, [HTTP_BINDINGS, ROUTER_PROVIDERS, StateService]);