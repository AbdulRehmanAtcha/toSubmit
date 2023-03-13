import React from "react";

const UserDetails = (props) => {
  const users = [
    {
      id: 1,
      name: "Muhammad Yahya",
      email: "yahya9091@yahoo.com",
      phone: "03328200604",
    },
    {
      id: 2,
      name: "Shaheer Ahmed",
      email: "shaheer@yahoo.com",
      phone: "03162487934",
    },
    {
      id: 3,
      name: "Syed Umair",
      email: "umair@hotmail.com",
      phone: "03356220650",
    },
  ];
  function handleClick(d) {
    props.onData(d);
  }
  return (
    <>
      <div className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleClick(user);
                }}
                key={user.id}
              >
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserDetails;
