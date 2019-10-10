const mongoose = require('mongoose');

exports.menuSchema = mongoose.Schema({
    id: {
        type: Number
    }, 
    img: {
        type: String
    },
    dish: {
        type: String
    },
    price: {
        type: Number
    }
});

exports.orderSchema = mongoose.Schema({
    table: {
        type: Number
    },
    dishes: [dish{type: String}],
    total: {
        type: Number
    }, 
    created_date: {
        type: Date,
        default: Date.now
    }
});

