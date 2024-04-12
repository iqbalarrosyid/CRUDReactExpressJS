import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <td>No</td>
              <td>Name</td>
              <td>Email</td>
              <td>Gender</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <button className="button is-small is-info is-marginless is-paddingless mr-2">
                    Edit
                  </button>
                  <button className="button is-small is-danger is-marginless is-paddingless">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;