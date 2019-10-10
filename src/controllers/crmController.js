require('dotenv').config();

const mongoose = require('mongoose');
const { menuSchema, orderSchema } = require('../models/crmModel');
const menuBreakfast = mongoose.model('menuBreakfast', menuSchema);
const menuDinner = mongoose.model('menuDinner', menuSchema);
const order = mongoose.model('order', orderSchema);

exports.addNewProductBreakfast = (req, res) => {
    let newProductB = new menuBreakfast(req.body);

    newProductB.save((error, menuBreakfast) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(menuBreakfast);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(menuBreakfast);
    });
};

exports.getMenuBreakfast = (req, res) => {
    menuBreakfast.find({}, (error, menuBreakfast) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(menuBreakfast);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(menuBreakfast);
    });
};

exports.getProductIDBreakfast = (req, res) => {
    menuBreakfast.findById(req.params.productId, (error, menuBreakfast) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(menuBreakfast);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(menuBreakfast);
    });
};

exports.editProductIDBreakfast = (req, res) => {
    menuBreakfast.findOneAndUpdate({_id: req.params.productId}, req.body, { new: true}, (error, menuBreakfast) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(menuBreakfast);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(order);

    });
};

exports.deleteProductIDBreakfast = (req, res) => {
    menuBreakfast.remove({_id: req.params.productId}, (error, menuBreakfast) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json({ message: "Product has been succesfully deleted" });
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(menuBreakfast);
    });
};

exports.addNewProductDinner = (req, res) => {
    let newProductD = new menuDinner(req.body);

    newProductD.save((error, menuDinner) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(menuDinner);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(menuDinner);
    });
};

exports.getMenuDinner = (req, res) => {
    menuDinner.find({}, (error, menuDinner) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(menuDinner);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(menuDinner);
    });
};

exports.getProductIDDinner = (req, res) => {
    menuDinner.findById(req.params.productId, (error, menuDinner) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(menuDinner);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(menuDinner);
    });
};

exports.editProductIDDinner = (req, res) => {
    menuDinner.findOneAndUpdate({_id: req.params.productId}, req.body, { new: true}, (error, menuDinner) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(menuDinner);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(menuDinner);
    });
};

exports.deleteProductIDDinner = (req, res) => {
    menuDinner.remove({_id: req.params.productId}, (error, menuDinner) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json({ message: "Product has been succesfully deleted" });
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json({ message: "Product has been succesfully deleted" });
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
