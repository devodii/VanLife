import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import HostLinks from "../../Components/HostLayout";
import styled from "styled-components";

const Dashboard = () => {
   return (
      <Container>
         <h2>Dashboard</h2>
         <abbr title="Emmanuel odii">EO</abbr>
      </Container>
   );
};

const Container = styled.div`
   abbr[title] {
      text-decoration: none;
   }
`;
export default Dashboard;
