var mapdf = [{
        main: "dulce",
        list: ["amargo", "acido", "picante"]
    },

    {
        main: "amargo",
        list: ["frutado"]
    },

    {
        main: "acido",
        list: ["salado", "graso", "tostado"]
    },

    {
        main: "cuerpo",
        list: ["crocante", "graso"]
    },

    {
        main: "alcohol",
        list: ["cuerpo", "cremoso", "alcohol"]
    },

    {
        main: "tostado",
        list: ["dulce"]
    }

];

var drinktags = ["dulce", "amargo", "acido", "cuerpo", "alcohol", "tostado", "frutado", "cremoso", "picante"];

var mapfd = [{
        main: "dulce",
        list: ["tostado"]
    },

    {
        main: "salado",
        list: ["acido"]
    },

    {
        main: "amargo",
        list: ["dulce"]
    },

    {
        main: "frutado",
        list: ["amargo"]
    },

    {
        main: "acido",
        list: ["dulce"]
    },

    {
        main: "cuerpo",
        list: ["alcohol"]
    },

    {
        main: "cremoso",
        list: ["alcohol"]
    },

    {
        main: "crocante",
        list: ["cuerpo"]
    },

    {
        main: "picante",
        list: ["dulce"]
    },

    {
        main: "graso",
        list: ["alcohol", "acido"]
    },

    {
        main: "tostado",
        list: ["acido", "tostado"]
    },

];

var foodtags = ["salado", "graso", "dulce", "amargo", "acido", "cuerpo", "alcohol", "tostado", "frutado", "cremoso", "picante", "crocante"];

var dbdrink = [{
    id: 0,
    titulo: "Cerveza Pale Ale",
    descripcion: "Cerveza amarga y lupulada.",
    productor: "Cerveceros ER",
    idproductor: 1,
    tags: ["alcohol"],
    image: "../../images/pale.jpg"
}, {
    id: 1,
    titulo: "Cerveza Belga",
    descripcion: "Cerveza seca con notas acidas, alta carbonatación.",
    productor: "Cerveceros ER",
    idproductor: 1,
    tags: ["frutado"],
    image: "../../images/belgian.jpg"
}, {
    id: 2,
    titulo: "Vino Malbec",
    descripcion: "Vino Malbec notaloko y los pibes.",
    productor: "Cerveceros ER",
    idproductor: 1,
    tags: ["amargo"],
    image: "../../images/malbec.jpg"
}, {
    id: 3,
    titulo: "Vino Pinot",
    descripcion: "Terrible escabio.",
    productor: "Cerveceros ER",
    idproductor: 1,
    tags: ["amargo", "alcohol", "frutado"],
    image: "../../images/pinot.jpg"
}];

var dbfood = [{
    _id: 0,
    titulo: "Bife de chorizo glaseadoo",
    descripcion: "Un terrible bife, sale con ensalada mixta de tomate, legucha y cebolla.",
    productor: "A4fuegos",
    idproductor: 2,
    tags: ["graso"],
    image: "../../images/bife.jpg"
}, {
    _id: 1,
    titulo: "Pinchos de pollo a la batimos la fruta",
    descripcion: "Uno arriba del otro, como trompada de ninja.",
    productor: "A3fuegos",
    idproductor: 3,
    tags: ["frutado", "alcohol"],
    image: "../../images/pinchos.jpg"
}];

Array.prototype.getUnique = function() {
    var u = {},
        a = [];
    for (var i = 0; i < this.length; ++i) {
        if (u.hasOwnProperty(this[i]._id)) {
            continue;
        }
        a.push(this[i]);
        u[this[i]._id] = 1;
    }
    return a;
};

function getById(id, li) {
    for (var i = li.length - 1; i >= 0; i--) {
        if (li[i].id == id) {
            return li[i];
        }
    };
};

//Recives a taste tags list, a list of foods and a taste-key-map.
function getMaridaje(tasteList, foodList, map) {

    var desiredFoods = [];
    for (var j = tasteList.length - 1; j >= 0; j--) {

        var taste = tasteList[j];


        for (var i = map.length - 1; i >= 0; i--) {

            if (map[i].main == taste) {

                var desiredTasteMap = map[i].list;
                console.log(map[i].main);
                console.log(map[i].list);

                for (var k = desiredTasteMap.length - 1; k >= 0; k--) {

                    var desiredTaste = desiredTasteMap[k];

                    for (var l = foodList.length - 1; l >= 0; l--) {

                        var foodTasteList = foodList[l].tags;

                        for (var r = foodTasteList.length - 1; r >= 0; r--) {

                            if (foodTasteList[r] == desiredTaste) {
                                //Matching taste
                                desiredFoods.push(foodList[l]);
                            }
                        };
                    };
                };
            }
        };
    };
    return desiredFoods;
};

var express = require('express');
var router = express.Router();

/* -- MONGO + RESTFUL -- */
var drink = require('../models/drinks.js');

drink.methods(['get', 'put', 'post', 'delete']);
drink.register(router, '/drink');

var food = require('../models/foods.js');

food.methods(['get', 'put', 'post', 'delete']);
food.register(router, '/meal');

/* -- METHODS -- */

/* -- MARIDAJE FOR DRINKS SEARCHING FOODS -- */
router.get('/get-parity/drink/:id', function(req, res, next) {

    drink.findOne({
        '_id': req.params.id
    }, function(err, obj) {

        food.find({}, function(error, elements){

            console.log(elements);
            res.send(getMaridaje(obj.tags, elements, mapdf).getUnique());

        });
        
    });

});

/* -- MARIDAJE FOR FOODS SEARCHING DRINKS -- */
router.get('/get-parity/meal/:id', function(req, res, next) {

    food.findOne({
        '_id': req.params.id
    }, function(err, obj) {

        drink.find({}, function(error, elements){

            console.log(elements);
            res.send(getMaridaje(obj.tags, elements, mapfd).getUnique());

        });
        
    });
});

/* -- API COMIDAS -- */
router.get('/get-meals', function(req, res, next) {
    res.send(dbfood);
});

router.get('/get-meal-tags', function(req, res, next) {
    res.send(foodtags);
});

router.get('/get-meal/:id', function(req, res, next) {

    console.log(req.params.id);

    res.send(getById(req.params.id, dbfood));
});

/* -- API BEBIDAS -- */
router.get('/get-drinks', function(req, res, next) {
    res.send(dbdrink);
});

router.get('/get-drink-tags', function(req, res, next) {
    res.send(drinktags);
});

router.get('/get-drink/:id', function(req, res, next) {

    console.log(req.params.id);

    res.send(getById(req.params.id, dbdrink));
});

module.exports = router;