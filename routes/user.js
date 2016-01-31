var express = require('express');
var Auth = require('../modules/auth/auth');

var userRouter = express.Router();

//log requested route
userRouter
    .use(function (req, res, next) {
        next();
});

userRouter
    .route('/')
    .post(function(req, res){
        Auth.createUser(req.body.username, req.body.password)
            .then(function(responseObject){
                res.json(responseObject);
            })
            .catch(function(errorObject){
                res.status(errorObject.code).json(errorObject);
            });
    })
    .put(function(req, res){
        Auth.loginUser(req.body.username, req.body.password)
            .then(function(responseObject){
                res.json(responseObject);
            })
            .catch(function(errorObject){
                res.status(errorObject.code).json(errorObject);
            });
    });

module.exports.userRouter = userRouter;