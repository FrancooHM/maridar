var rest = require('node-restful');
var mongoose = rest.mongoose;

/* -- SCHEMA -- */
var Schema = mongoose.Schema;

var foodsSchema = new Schema({
    titulo: String,
    descripcion: String,
    productor: String,
    idproductor: Number,
    tags: [String],
    image: String
});

/* -- RETURN MODEL-- */
module.exports = rest.model('food', foodsSchema);