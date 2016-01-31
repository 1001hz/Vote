import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    template:`
    <div>
        TEST.{{ title }}
    </div>
    `
})
export class HomeComponent{
    public title = 'Home';
}
