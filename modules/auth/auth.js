var Q = require('q');
var User = require('../auth/models/user');
var crypto = require('crypto');

module.exports = {

    createUser: function(username, password){
        var defer = Q.defer();

        // create a user a new user
        var newUser = new User({
            username: username,
            password: crypto.createHash('sha256').update(password).digest('hex'),
            account: 'user', //always 'user' type for frontend accounts
        });

        //check for duplicate
        Q(User.findOne({ username: username }).exec())
            .then(function(user){
                if(user){
                    defer.reject({code:409, err: "Username " + username + " already exists." });
                }
                else{
                    newUser.setToken();
                    return Q(newUser.save());
                }
            })
            .then(function(){
                defer.resolve({ user: newUser });
            })
            .catch(function(err){
                defer.reject({ code:500, err: err });
            });

        return defer.promise;
    },
    loginUser: function(username, password){
        var defer = Q.defer();

        Q(User.findOne({ username: username }).exec())
            .then(function(user){
                if (!user) {
                    defer.reject({ code:422, err: "User " + username + " doesn't exist." });
                }
                if(!user.comparePassword(password)){
                    defer.reject({ code:422, err: "Password is incorrect." });
                }
                user.setToken();
                user.save();
                return user;
            })
            .then(function(user){
                defer.resolve({ user: user });
            })
            .catch(function(err){
                defer.reject({ code:500, err: err });
            });

        return defer.promise;
    },
    tokenLogin: function(username, token){
        var defer = Q.defer();

        Q(User.findOne({ username: username }).exec())
            .then(function(user){
                if (!user) {
                    defer.reject({ code:422, err: "User " + username + " doesn't exist." });
                }
                if(user.token !== token){
                    defer.reject({ code:422, err: "Invalid token.." });
                }
                defer.resolve({ user: user });
            })
            .catch(function(err){
                defer.reject({ code:500, err: err });
            });

        return defer.promise;
    },
    verifyToken: function(token){
        var defer = Q.defer();

        Q(User.findOne({ token: token }).exec())
            .then(function(user){
                if (!user) {
                    defer.reject({ code:422, err: "Invalid token" });
                }
                defer.resolve(user);
            })
            .catch(function(err){
                defer.reject({ code:500, err: err });
            });

        return defer.promise;
    }
}