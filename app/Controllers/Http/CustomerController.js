"use strict";

class CustomerController {
  test() {
    return "Hello world";
  }

  index({ view }) {
    const message = "HELLO WORLD";
    return view.render("customer", { message });
  }
}

module.exports = CustomerController;
