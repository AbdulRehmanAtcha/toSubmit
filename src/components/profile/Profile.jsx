import React from "react";
import "./style.css";

function Profile(props) {
  return (
    <div className="main">
      <div className="box">
        <h2>
          Name: {props.firstName} {props.lastName}
        </h2>
        <h2>Email: {props.email}</h2>
      </div>
    </div>
  );
}

export default Profile;
