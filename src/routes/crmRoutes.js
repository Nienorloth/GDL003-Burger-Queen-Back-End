const { addNewProductBreakfast, getMenuBreakfast, addNewProductDinner, getMenuDinner, addNewOrder, getOrders } = require('../controllers/crmController');

const routes = (app) => {

    app.route('/menuBreakfast')
    //GET endpoint for menuBreakfast
    .get(getMenuBreakfast);

    app.route('/addProductBreakfast')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getMenuBreakfast) //GET endpoint for addProductBreakfast
    //POST endpoint for addProductBreakfast
    .post(addNewProductBreakfast);

    app.route("/addProductBreakfast/:productId")
    .get((req, res) =>
    res.send("GET request successfull!!"))
    .put((req, res) =>
    res.send("PUT request successfull!!"))
    .delete((req, res) =>
    res.send("DELETE request successfull!!"));

    app.route('/menuDinner')
    //GET endpoint for menuDinner
    .get(getMenuDinner);

    app.route('/addProductDinner')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getMenuDinner) //GET endpoint for addProductDinner
    //POST endpoint for addProductDinner
    .post(addNewProductDinner);

    app.route("/addProductDinner/:productId")
    .get((req, res) =>
    res.send("GET request successfull!!"))
    .put((req, res) =>
    res.send("PUT request successfull!!"))
    .delete((req, res) =>
    res.send("DELETE request successfull!!"));

    app.route('/orders')
    //GET endpoint for orders
    .get(getOrders)
    //POST endpoint for orders
    .post(addNewOrder);

    app.route("/orders/:orderId")
    .get((req, res) =>
    res.send("GET request successfull!!"))
    .put((req, res) =>
    res.send("PUT request successfull!!"))
    .delete((req, res) =>
    res.send("DELETE request successfull!!"));
}

module.exports = routes;