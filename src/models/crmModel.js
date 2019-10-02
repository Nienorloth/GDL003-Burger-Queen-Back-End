const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
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

module.exports = mongoose.model('order', orderSchema);
