System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(dataFromApi) {
                    var data = JSON.parse(dataFromApi._body).user;
                    this.id = data._id;
                    this.username = data.username;
                    this.account = data.account;
                    this.token = data.token;
                    this.lastLogin = data.lastLogin;
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.entity.js.map