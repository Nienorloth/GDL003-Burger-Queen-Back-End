const cors = require('cors');
app.use(cors();

const { 
    getMenuBreakfast, 
    addNewProductBreakfast, 
    getProductIDBreakfast, 
    editProductIDBreakfast, 
    deleteProductIDBreakfast, 
    getMenuDinner, 
    addNewProductDinner, 
    getProductIDDinner, 
    editProductIDDinner, 
    deleteProductIDDinner, 
    getOrders, 
    addNewOrder, 
    getOrderID, 
    editOrderID, 
    deleteOrderID, 
} = require('../controllers/crmController');


const routes = (app) => {

    app.route('/menuBreakfast')
    //GET endpoint for menuBreakfast
    .get(getMenuBreakfast);

    app.route('/addProductBreakfast')
    //GET and POST endpoints for addProductBreakfast
    .get(getMenuBreakfast)
    .post(addNewProductBreakfast);

    app.route("/addProductBreakfast/:productId")
    //GET PUT DELETE endpoints for specific ID product
    .get(getProductIDBreakfast)
    .put(editProductIDBreakfast)
    .delete(deleteProductIDBreakfast);

    app.route('/menuDinner')
    //GET endpoint for menuDinner
    .get(getMenuDinner);

    app.route('/addProductDinner')
    //GET and POST endpoints for addProductDinner
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getMenuDinner)
    .post(addNewProductDinner);

    app.route("/addProductDinner/:productId")
    //GET PUT DELETE endpoints for specific ID product
    .get(getProductIDDinner)
    .put(editProductIDDinner)
    .delete(deleteProductIDDinner);

    app.route('/orders')
    //GET and POST endpoints for orders
    .get(getOrders)
    .post(addNewOrder);

    //GET PUT DELETE endpoints for specific ID order
    app.route("/orders/:orderId")
    .get(getOrderID)
    .put(editOrderID)
    .delete(deleteOrderID);
}

module.exports = routes;