var express = require('express');
var Auth = require('../modules/auth/auth');
var voteRouter = express.Router();

//protected by token
voteRouter
    .use(function (req, res, next) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        if(token){
            Auth.verifyToken(token)
                .then(function(){
                    next();
                })
                .catch(function(err){
                    return res.status(err.code).json(err);
                });
        }
        else{
            return res.status(403).json({ code:403, err: "Restricted resource" });
        }
    });

voteRouter
    .route('/')
    .get(function(req, res){
        res.json({test:"test"});
    });

module.exports.voteRouter = voteRouter;