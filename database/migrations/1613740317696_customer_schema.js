"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CustomerSchema extends Schema {
  up() {
    this.create("customers", table => {
      table.increments();
      table.string("name", 100).notNullable();
      table
        .string("email", 80)
        .notNullable()
        .unique();
      table.string("address", 100);
      table.bigInteger("phone", 100);
      table.timestamps();
    });
  }

  down() {
    this.drop("customers");
  }
}

module.exports = CustomerSchema;
