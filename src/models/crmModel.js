const mongoose = require('mongoose');

exports.menuSchema = mongoose.Schema({
    img: {
        type: String
    },
    dish: {
        type: String
    },
    price: {
        type: Number
    }, 
    created_date: {
        type: Date,
        default: Date.now
    }
});

exports.orderSchema = mongoose.Schema({
    table: {
        type: Number
    },
    dish: {
        type: String
    },
    price: {
        type: Number
    }, 
    created_date: {
        type: Date,
        default: Date.now
    }
});

