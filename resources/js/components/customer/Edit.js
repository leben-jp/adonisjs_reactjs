import React, { useEffect, useState } from "react";

import customerService from "../../services/Customer";

function Edit(props) {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    async function fetchDataCustomer() {
      let id = props.match.params.id;
      const res = await customerService.get(id);

      if (res.success) {
        console.log(res);
        const data = res.data;
        setId(data.id);
        setName(data.name);
        setEmail(data.email);
        setAddress(data.address);
        setPhone(data.phone);
      } else {
        alert(res.message);
      }
    }
    fetchDataCustomer();
  }, []);

  const updateCustomer = async () => {
    const data = {
      id,
      name,
      email,
      address,
      phone
    };

    const res = await customerService.update(data);

    if (res.success) {
      alert(res.message);
    } else {
      alert(res.message);
    }
  };

  return (
    <div>
      <h4>Edit customer </h4>
      <hr />
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Name {name}</label>
          <input
            type="text"
            class="form-control"
            value={name}
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
            value={email}
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
            value={address}
            onChange={event => setAddress(event.target.value)}
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Phone </label>
          <input
            type="text"
            class="form-control"
            placeholder="123467890"
            value={phone}
            onChange={event => setPhone(event.target.value)}
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <button
            onClick={() => updateCustomer()}
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

export default Edit;
