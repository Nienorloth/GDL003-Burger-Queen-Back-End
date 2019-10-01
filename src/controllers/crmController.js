const mongoose = require('mongoose');
const order = require('../models/crmModel');

// const Dinner = mongoose.model('Dinner', product);

exports.addNewOrder = (req, res) => {
    let newOrder = new order(req.body);

    newOrder.save((err, order) => {
        if (err) {
            res.send(err);
        }
        res.json(order);
    });
};

// exports.getMenuDinner = (req, res, next) => {
//         product.find() //fetches all the posts
//            .then(result => {
//                res.send(result);
//            }).catch(err => {
//                res.status(400).send(err);
//            })
// }

