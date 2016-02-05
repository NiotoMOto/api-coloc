const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const User = require('mongoose').model('User');

const models = require('../data/')

router.post('/login', (req, res) => {
  User.findOne({username: req.body.username}, (err, user) => {
    if(err || !user) {
      res.sendStatus(401);
    }else{
      user.verifyPassword(req.body.password, valid => {
        if(valid){
          res.json(user);
        }else{
          res.sendStatus(401);
        }
      });
    }
  })
});

module.exports = router;
