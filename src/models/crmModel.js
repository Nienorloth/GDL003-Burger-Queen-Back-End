const mongoose = require('mongoose');

exports.productsSchema = mongoose.Schema({
    id: {
        type: Number
    }, 
    img: {
        type: String
    },
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
});

exports.orderSchema = mongoose.Schema({
    products: [ ],
    total: Number,
    created_date: {
        type: Date,
        default: Date.now
    }
});

