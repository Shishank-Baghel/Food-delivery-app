import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const LoggedInUser= ()=>{

  // API call to check authentication user
  return true
}

const Header = () => {

  const[isLoggedIn, setIsLoggedIn]=  useState(true);




    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <Link to="">
              <li>Home</li></Link>
            <Link to="/about">
            <li>About Us</li>
            </Link>
           <Link to="/contact">
           <li>Contact Us</li>
           </Link>
            <li>Cart</li>
            {
              isLoggedIn ?( <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button>) : 
              ( <button onClick={()=>{setIsLoggedIn(true)}} >Login</button> )
            }
          </ul>
          
        </div>
      </div>
    );
  };

  export default Header;