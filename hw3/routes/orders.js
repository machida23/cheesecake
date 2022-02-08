/*
Author: Logan Machida
Class: CS 341
*/

var express = require('express');
// create a new router object
var router = express.Router();

router.post('/', function(req, res, next){
    // create array of objects
    var data =[{topping:"cherry", quantity:"2"},
        {topping:"plain", quantity:"6"},
        {topping:"chocolate", quantity:"3"}];

    // convert object to JSON string
    var stringData = JSON.stringify(data);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    // send the data
    res.send(stringData);

})

module.exports = router;
