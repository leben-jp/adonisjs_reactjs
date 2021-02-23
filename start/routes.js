"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("customer", "CustomerController.index");

Route.group(() => {
  Route.post("customer/create", "CustomerController.create");
  Route.get("customer/list", "CustomerController.list");
  Route.get("customer/get/:id", "CustomerController.get");
  Route.put("customer/update/:id", "CustomerController.update");
  Route.delete("customer/delete/:id", "CustomerController.delete");
}).prefix("api");
