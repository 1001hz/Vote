import {Injectable} from 'angular2/core';
import {User} from '../auth/user.entity';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StateService {
    user$: Observable<User>;
    private _todosObserver: any;
    private _dataStore: {
        user: User
    };

    constructor() {
        // Create Observable Stream to output our data
        this.user$ = new Observable(observer => {
            this._todosObserver = observer;
        }).share();

        this._dataStore = { user: User };
    }


    setUser(user : User){
        this._dataStore.user = user;
        this._todosObserver.next(this._dataStore);
    }

}