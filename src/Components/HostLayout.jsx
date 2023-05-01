import React from 'react'
import { Link, Outlet } from "react-router-dom";
import styled from 'styled-components';


const HostLinks = () => {
  return (
     <Container>
        <div className='link-container'> 
           <Link to="/host">Dashboard</Link>
           <Link to="/host/reviews">Reviews</Link>
           <Link to="/host/income">Income</Link>
        </div>

        <Outlet />
     </Container>
  );
}

const Container = styled.div`
    div.link-container {
    display: flex;
    gap: 10px;
    margin-top: 2rem;
  a {
    color: black;
    text-decoration: none;
    &:focus {
      text-decoration: underline;
    }
  }
}
`
export default HostLinks
