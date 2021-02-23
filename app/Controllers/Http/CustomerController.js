"use strict";

const Customer = use("App/Models/Customer");

class CustomerController {
  /*  ...  */

  // ------- API REST --------------

  test() {
    return "Hello world";
  }

  index({ view }) {
    const message = "Developed by Artyom";
    return view.render("customer", { message });
  }

  async create({ request }) {
    try {
      const body = request.post();
      console.log(body);

      const customer = new Customer();
      customer.name = body.name;
      customer.email = body.email;
      customer.address = body.address;
      customer.phone = body.phone;
      const res = await customer.save();

      console.log(res);

      const response = {
        success: true,
        message: "save successful"
      };
      return response;
    } catch (e) {
      const response = {
        success: false,
        message: e.message
      };
      return response;
    }
  }

  async list() {
    try {
      const data = await Customer.all();

      const response = {
        success: true,
        message: "load successful",
        data: data
      };
      return response;
    } catch (e) {
      const response = {
        success: false,
        message: e.message
      };
      return response;
    }
  }

  async get({ params }) {
    try {
      const { id } = params;
      const data = await Customer.find(id);

      if (data) {
        const response = {
          message: "load successful",
          success: true,
          data: data
        };
        return response;
      } else {
        const response = {
          message: "Not found data " + id,
          success: false
        };
        return response;
      }
    } catch (e) {
      const response = {
        success: false,
        message: e.message
      };
      return response;
    }
  }

  async update({ params, request }) {
    try {
      const { id } = params;

      const body = request.post();

      const data = {
        name: body.name,
        email: body.email,
        address: body.address,
        phone: body.phone
      };

      await Customer.query()
        .where("id", id)
        .update(data);

      const response = {
        message: "updated successful",
        success: true
      };
      return response;
    } catch (e) {
      const response = {
        success: false,
        message: e.message
      };
      return response;
    }
  }

  async delete({ params }) {
    try {
      const { id } = params;

      const customer = await Customer.find(id);
      await customer.delete();

      const response = {
        success: true,
        message: "Deleted successful"
      };
      return response;
    } catch (e) {
      const response = {
        success: false,
        message: e.message
      };
      return response;
    }
  }
}

module.exports = CustomerController;
