const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    img: String,
    dish: String,
    price: Number
    }, {
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('product', productSchema);