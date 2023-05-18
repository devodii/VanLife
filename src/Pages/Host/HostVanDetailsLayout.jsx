import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const HostVanDetailsLayout = () => {
   const active = {
      textDecoration: "underline",
      fontWeight: "bold",
   };
   return (
      <Container>
         <div>
            <NavLink
               style={({ isActive }) => (isActive ? active : null)}
               to="."
               end
            >
               Details
            </NavLink>
            <NavLink
               style={({ isActive }) => (isActive ? active : null)}
               to="pricing"
            >
               Pricing
            </NavLink>
            <NavLink
               style={({ isActive }) => (isActive ? active : null)}
               to="photos"
            >
               Photos
            </NavLink>
         </div>
      </Container>
   );
};

const Container = styled.div`
   div {
      margin-top: 20px;
      a {
         color: inherit;
         text-decoration: none;
         margin-right: 10px;
      }
   }
`;

export default HostVanDetailsLayout;
