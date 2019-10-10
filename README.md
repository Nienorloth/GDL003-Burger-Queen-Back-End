# Burger Kawaii API

API para el sistema de comandas del restaurante Burger Kawaii, desplegado en heroku en la URL (https://pacific-sands-67249.herokuapp.com/). Se utilizó la base de datos de mongo DB Atlas, con 3 colecciones: menudinners, menubreakfasts y orders. 

## Endpoints
La URL contiene las siguientes rutas con sus respectivos métodos habilitados:

* /menuBreakfast 
    * Métodos: GET.
* /addProductBreakfast
    * Métodos: GET, POST.
* /addProductBreakfast/:productId
    * Métodos: GET, PUT, DELETE.
*  /menuDinner
    * Métodos: GET.
* /addProductDinner
    * Métodos: GET, POST.
* /addProductDinner/:productId
    * Métodos: GET, PUT, DELETE
* /orders
    * Métodos: GET, POST.
* /orders/:orderId
    * Métodos: GET, PUT, DELETE.


## Los esquemas definidos son:
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
        type: String
    },
    total: {
        type: Number
    }, 
    created_date: {
        type: Date,
        default: Date.now
    }


