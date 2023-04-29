import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import styled from "styled-components";


const App = (props) => {
   return (
      <Container>
         <header>
            <Link to='/'>#VANLIFE</Link>

            <nav>
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
            </nav>
         </header>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </Container>
   );
};
export default App;

const Container = styled.div`
   header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-inline: 20px;
      a {
         text-decoration: none;
         color: blue;
      }

      nav {
         display: flex; 
         gap: 4px;
      }
   }
`;
