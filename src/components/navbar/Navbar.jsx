import React from "react";
import "./style.css";

const Navbar = (props) => {
  const backHandler = () => {
    props.onData();
  };
  return (
    <nav>
      <button onClick={backHandler}>Home</button>
    </nav>
  );
};

export default Navbar;
