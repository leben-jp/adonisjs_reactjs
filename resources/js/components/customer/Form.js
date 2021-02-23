import React, { useEffect, useState } from "react";

import customerService from "../../services/Customer";

function Form() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);

  const [error, setError] = useState(null);

  const onClickSave = async () => {
    setError(null);

    const datapost = { name, email, address, phone };

    const res = await customerService.save(datapost);

    if (res.success) {
      alert(res.message);
    } else {
      setError(res.message);
    }
  };

  return (
    <div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            onChange={event => setName(event.target.value)}
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="you@example.com"
            onChange={event => setEmail(event.target.value)}
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Address</label>
          <input
            type="text"
            class="form-control"
            placeholder="1234 Main St"
            onChange={event => setAddress(event.target.value)}
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="phone">Phone </label>
          <input
            type="text"
            class="form-control"
            placeholder="123467890"
            onChange={event => setPhone(event.target.value)}
          />
        </div>
      </div>

      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div class="row">
        <div class="col-md-6 mb-3">
          <button
            onClick={() => onClickSave()}
            class="btn btn-primary btn-block"
            type="submit"
          >
            Save 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
