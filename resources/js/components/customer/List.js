import React, { useEffect, useState } from "react";

import customerService from "../../services/Customer";

import { Link } from "react-router-dom";

function List() {
  const [listCustomer, setListCustomer] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function fetchDataCustomer() {
      const res = await customerService.list();
      console.log(res.data);
      setListCustomer(res.data);
    }

    fetchDataCustomer();
  }, []);

  const onClickDelete = async (i, id) => {
    var yes = confirm("are you sure to delete this item?");

    if (yes === true) {
      const res = await customerService.delete(id);
      if (res.success) {
        const newList = listCustomer;
        newList.splice(i, 1);
        setListCustomer(newList);
        setMessage("Deleted successful customer id=" + id);
      } else {
        setMessage("Error =>" + id);
      }
    }
  };

  return (
    <section>
      {message && (
        <div class="alert alert-secondary" role="alert">
          {message}
        </div>
      )}
      <table class="table">
        <thead class="thead-dark table-bordered">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listCustomer.map((item, i) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>
                  <Link to={"/customer/edit/" + item.id} class="btn btn-light">
                    {" "}
                    Edit{" "}
                  </Link>
                  <a
                    href="#"
                    class="btn btn-danger"
                    onClick={() => onClickDelete(i, item.id)}
                  >
                    {" "}
                    Delete{" "}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default List;
