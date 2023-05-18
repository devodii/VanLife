import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const HostLinks = () => {
   const activeStyle = {
      fontWeight: "bold",
      textDecoration: "underline",
   };
    
   return (
      <Container>
         <div className="link-container">
            <NavLink
               to="."
               end
               style={(props) => (props.isActive ? activeStyle : null)}
            >
               Dashboard
            </NavLink>
            <NavLink
               to="reviews"
               style={({ isActive }) => (isActive ? activeStyle : null)}
            >
               Reviews
            </NavLink>
            <NavLink
               to="vans"
               style={({ isActive }) => (isActive ? activeStyle : null)}
            >
               Vans
            </NavLink>
            <NavLink
               to="income"
               style={({ isActive }) => (isActive ? activeStyle : null)}
            >
               Income
            </NavLink>
         </div>
         <Outlet />
         {/* Outlet is a placeholder that matches all children routes given in it's definition.  */}
      </Container>
   );
};

const Container = styled.div`
   div.link-container {
      display: flex;
      gap: 10px;
      margin-top: 2rem;
      a {
         color: black;
         text-decoration: none;
      }
   }
`;
export default HostLinks;
