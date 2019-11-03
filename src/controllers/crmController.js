require('dotenv').config();

const mongoose = require('mongoose');
const { productsSchema, orderSchema } = require('../models/crmModel');
const products = mongoose.model('Product', productsSchema);
const order = mongoose.model('Order', orderSchema);

exports.addNewProduct = (req, res) => {
    let newProductB = new products(req.body);

    newProductB.save((error, products) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(products);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(products);
    });
};

exports.getProducts = (req, res) => {
    products.find({}, (error, products) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(products);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(products);
    });
};

exports.getProductID = (req, res) => {
    products.findById(req.params.productId, (error, products) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(products);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(products);
    });
};

exports.editProductID = (req, res) => {
       products.findOneAndUpdate({_id: req.params.productId}, req.body, { new: true}, (error, products) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(products);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(order);

    });
};

exports.deleteProductID = (req, res) => {
    products.remove({_id: req.params.productId}, (error, products) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json({ message: "Product has been succesfully deleted" });
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(products);
    });
};


exports.addNewOrder = (req, res) => {
    let newOrder = new order(req.body);

    newOrder.save((error, order) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(order);
        } else {
            res.send('Not authorized');
        }  
        // if (error) {
        //     res.send(error);
        // }
        // res.json(order);
    });
};

exports.getOrders = (req, res) => {
    order.find({}, (error, order) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(order);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(order);
    });
};

exports.getOrderID = (req, res) => {
    order.findById(req.params.orderId, (error, order) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(order);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(order);    
    });
};

exports.editOrderID = (req, res) => {
    order.findOneAndUpdate({_id: req.params.orderId}, req.body, { new: true}, (error, order) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(order);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(order);
    });
};

exports.deleteOrderID = (req, res) => {
    order.remove({_id: req.params.orderId}, (error, order) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json({ message: "Order has been succesfully deleted" });
        } else {
            res.send('Not authorized');
        } 
        // if (error) {
        //     res.send(error);
        // }
        // res.json(order);    
    });
};
