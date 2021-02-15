import React, { useEffect, useState } from "react";

function Form() {
  return (
    <div>
      <h4>Form customer</h4>
      <hr />
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Name</label>
          <input type="text" class="form-control" placeholder="Name" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Address</label>
          <input type="text" class="form-control" placeholder="1234 Main St" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="phone">Phone </label>
          <input type="text" class="form-control" placeholder="123467890" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <button class="btn btn-primary btn-block" type="submit">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
