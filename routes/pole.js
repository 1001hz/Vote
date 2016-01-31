var express = require('express');
var Auth = require('../modules/auth/auth');
var Pole = require('../modules/pole/models/pole');
var poleRouter = express.Router();

var user = null;

//protected by token
poleRouter
    .use(function (req, res, next) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        if(token){
            Auth.verifyToken(token)
                .then(function(_user){
                    user = _user;
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

poleRouter
    .route('/')
    .get(function(req, res){
        Pole.find(function(err, poles){
            if(err){
                res.status(500).json(err);
            }
            else{
                res.json(poles);
            }
        });

    })
    .post(function(req, res){
        var pole = new Pole(req.body);
        pole.owner = user.username;
        pole.ownerId = user._id;
        pole.save(function(err, pole){
            if(err){
                res.status(500).json(err);
            }else{
                res.json(pole);
            }
        });
    });

poleRouter
    .route('/:poleId')
    .get(function(req, res){
        Pole.findById(req.params.poleId, function(err, pole){
            if(err){
                res.status(500).json(err);
            }
            else{
                res.json(pole);
            }
        });
    });

module.exports.poleRouter = poleRouter;