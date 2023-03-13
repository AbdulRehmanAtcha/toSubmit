import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";

import UserDetails from "./components/UserDetails";
import UserProfile from "./components/UserProfile";

function App() {
  const [user, setUser] = useState(null);

  function handleData(data) {
    setUser(data);
    // console.log(data)
  }
  function clearUser() {
    setUser(null);
  }

  return (
    <div>
      <Navbar onData={clearUser} />
      <br />
      <br />
      {user !== null ? (
        <UserProfile userInformation={user} />
      ) : (
        <UserDetails onData={handleData} />
      )}
      
    </div>
  );
}

export default App;
