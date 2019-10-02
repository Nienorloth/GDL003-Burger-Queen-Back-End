const mongoose = require('mongoose');
const { menuSchema, orderSchema } = require('../models/crmModel');
const menuBreakfast = mongoose.model('menuBreakfast', menuSchema);
const menuDinner = mongoose.model('menuDinner', menuSchema);
const order = mongoose.model('order', orderSchema);

exports.addNewProductBreakfast = (req, res) => {
    let newProductB = new menuBreakfast(req.body);

    newProductB.save((error, menuBreakfast) => {
        if (error) {
            res.send(error);
        }
        res.json(menuBreakfast);
    });
};

exports.getMenuBreakfast = (req, res) => {
    menuBreakfast.find({}, (error, menuBreakfast) => {
        if (error) {
            res.send(error);
        }
        res.json(menuBreakfast);
    });
};

exports.addNewProductDinner = (req, res) => {
    let newProductD = new menuDinner(req.body);

    newProductD.save((error, menuDinner) => {
        if (error) {
            res.send(error);
        }
        res.json(menuDinner);
    });
};

exports.getMenuDinner = (req, res) => {
    menuDinner.find({}, (error, menuDinner) => {
        if (error) {
            res.send(error);
        }
        res.json(menuDinner);
    });
};

exports.addNewOrder = (req, res) => {
    let newOrder = new order(req.body);

    newOrder.save((error, order) => {
        if (error) {
            res.send(error);
        }
        res.json(order);
    });
};

exports.getOrders = (req, res) => {
    order.find({}, (error, order) => {
        if (error) {
            res.send(error);
        }
        res.json(order);
    });
};

