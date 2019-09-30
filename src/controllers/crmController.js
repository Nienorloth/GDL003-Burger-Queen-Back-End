const mongoose = require('mongoose');
const product = require('../models/crmModel.js');

// const Dinner = mongoose.model('Dinner', product);

const addDinnerProduct = (req, res) => {
    let newProduct = new product(req.body);

    newProduct.save((err,product) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

module.exports = addDinnerProduct;