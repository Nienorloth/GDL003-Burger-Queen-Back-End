const mongoose = require('mongoose');
const order = require('../models/crmModel');

exports.addNewOrder = (req, res) => {
    let newOrder = new order(req.body);

    newOrder.save((error, order) => {
        if (error) {
            res.send(error);
        }
        res.json(order);
    });
};
