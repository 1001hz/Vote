export class User {
    id: number;
    username: string;
    account: string;
    token: string;
    lastLogin: string;

    constructor(dataFromApi) {
        var data = JSON.parse(dataFromApi._body).user;
        this.id = data._id;
        this.username = data.username;
        this.account = data.account;
        this.token = data.token;
        this.lastLogin = data.lastLogin;
    }


}