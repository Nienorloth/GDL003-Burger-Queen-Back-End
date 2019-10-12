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
    user: String,
    table: Number,
    dishes: [ ],
    total: Number,
    active: Number,
    created_date: {
        type: Date,
        default: Date.now
    }
});

exports.userSchema = mongoose.Schema({
    user: String,
    created_date: {
        type: Date,
        default: Date.now
    }
});
 

