import React from "react";

const UserProfile = (props) => {
  return (
    <div>
      <h2>User ID: {props.userInformation.id}</h2>
      <h2>Name: {props.userInformation.name}</h2>
      <h2>Email: {props.userInformation.email}</h2>
      <h2>Phone: {props.userInformation.phone}</h2>      
      {/* {console.log(props.userInformation.id)} */}
    </div>
  );
};

export default UserProfile;
