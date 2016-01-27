var express = require('express');
var router = express.Router();
var path = require('path');

var __root = path.join("public");

/* GET splash */
router.get('/', function(req, res, next) {
    res.sendfile(__root + "/index.html");
});

/* GET [panel] */
router.get('/panel', function(req, res, next) {
    res.sendfile(__root + "/panel.html");
});

/* GET [panel-list] */
router.get('/panel-list', function(req, res, next) {
    res.sendfile(__root + "/panel-list.html");
});

/* GET index for drink */
router.get('/index-drink', function(req, res, next) {
    res.sendfile(__root + '/index-drink.html');
});

router.get('/drink-food/:id', function(req, res) {
    res.sendfile(__root + '/drink-food.html');
});

/* GET index for food */
router.get('/index-food', function(req, res, next) {
    res.sendfile(__root + '/index-food.html');
});

router.get('/food-drink/:id', function(req, res) {
    res.sendfile(__root + '/food-drink.html');
});

/* GET result */

router.get('/picked/:foodid/:drinkid', function(req, res) {
    res.sendfile(__root + '/picked.html');
});

module.exports = router;