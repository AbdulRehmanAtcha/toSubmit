// import logo from "./logo.svg";
import { useState } from "react";
// import { useState } from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
// import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [userId, setUserId] = useState(0);
  {/* Making functions to change the user to show. */}
  const handleTab = (number) => {
    setUserId(number);
  };
  return (
    <>
    {/* Making Table Of Users */}
      <div className="table-responsive">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {/* Making functions to change the user to show. */}
              <td onClick={() => handleTab(1)}>Muhammad</td>
              <td onClick={() => handleTab(1)}>Yahya</td>
              <td>yahya@yahoo.com</td>
            </tr>
            <tr>
              <td>2</td>
              {/* Making functions to change the user to show. */}
              <td onClick={() => handleTab(2)}>Shaheer</td>
              <td onClick={() => handleTab(2)}>Ahmed</td>
              <td>shaheer786@gmail.com</td>
            </tr>
            <tr>
              <td>3</td>
              {/* Making functions to change the user to show. */}
              <td onClick={() => handleTab(3)}>Syed</td>
              <td onClick={() => handleTab(3)}>Umair</td>
              <td>umair9091@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Showing Profile box */}
      {userId === 1 && (
        <Profile
          firstName="Muhammad"
          lastName="Yahya"
          email="yahya@yahoo.com"
        />
      )}
      {userId === 2 && (
        <Profile
          firstName="Shaheer"
          lastName="Ahmed"
          email="shaheer786@gmail.com"
        />
      )}
      {userId === 3 && (
        <Profile
          firstName="Syed"
          lastName="Umair"
          email="umair9091@gmail.com"
        />
      )}
    </>
  );
}

export default App;
