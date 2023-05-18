import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineUser }from "react-icons/ai"
const Header = () => {
   const activeLink = {
      fontWeight: "bold",
      textDecoration: "underline",
   };

   function logOut() {
      localStorage.removeItem('loggedIn');
   }
   return (
      <header>
         <Link to=".">#VANLIFE</Link>
         <nav>
            <NavLink
               to="about"
               style={({ isActive }) => (isActive ? activeLink : null)}
            >
               About
            </NavLink>
            <NavLink
               to="vans"
               style={({ isActive }) => (isActive ? activeLink : null)}
            >
               Vans
            </NavLink>
            <NavLink
               to="host"
               style={({ isActive }) => (isActive ? activeLink : null)}
            >
               Host
            </NavLink>

            <NavLink to={'login'} style={{marginLeft: "10px", marginTop: "2px"}}>
               <AiOutlineUser />
            </NavLink>

            <button onClick={logOut}>X</button>
         </nav>
      
      
      </header>
   );
};

export default Header;
