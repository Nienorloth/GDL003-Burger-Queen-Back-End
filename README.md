# Burger Kawaii API
![Kawaii-burger](https://i.ibb.co/j86FS6q/Burguer-Kawaii.png)

Restful API para el sistema de comandas del restaurante Burger Kawaii, desplegado en heroku en la URL (https://pacific-sands-67249.herokuapp.com/). Se utilizó el modelo MVC para crear el boiler plate de la aplicación, así como la base de datos de mongo DB Atlas, con 3 colecciones: menudinners, menubreakfasts y orders. 

## Token de autorización

La conexión está protegida por un token que debe ser agregado como header de autorización en cada petición para poder acceder: { Authorization: "token"}.

##Endpoints

La URL contiene las siguientes rutas con sus respectivos métodos habilitados:

* /menuBreakfast 
    Métodos: GET.
* /addProductBreakfast
    Métodos: GET, POST.
* /addProductBreakfast/:productId
    Métodos: GET, PUT, DELETE.
*  /menuDinner
    Métodos: GET.
* /addProductDinner
    Métodos: GET, POST.
* /addProductDinner/:productId
    Métodos: GET, PUT, DELETE
* /orders
    Métodos: GET, POST.
* /orders/:orderId
    Métodos: GET, PUT, DELETE.


##Los esquemas definidos son:
* menudinners, menubreakfast:
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

 * orders:
    table: {
        type: Number
    },
    dishes: {
        type: Array
    },
    total: {
        type: Number
    }, 
    created_date: {
        type: Date,
        default: Date.now
    }

## Recursos utilizados:

* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [mongoose](https://mongoosejs.com/)
* [MongoDB Cloud](https://cloud.mongodb.com/)
* [Postman](https://www.getpostman.com)
* [dotenv `process.env`](https://www.npmjs.com/package/dotenv)
* [Heroku `deploy`](https://www.heroku.com/)
* [Cors](https://www.npmjs.com/package/cors)

