import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./Pages/About";
import styled from "styled-components";
import Home from "./Pages/Home";
import Vans from "./Pages/Vans";
import VanDetails from "./Pages/VanDetails";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostLinks from "./Components/HostLayout";

const Main = (props) => {
    // const users = {
    //     name: "Emmauel odii",
    //     age: 16,
    //     skill: "Front end development"
    // }

    // for (const [key, values] of Object.entries(users)) {
    //     console.log(key, values)
    // }


   return (
      <Container>
         <Routes>
            <Route path='/' element={<Layout />}>
               {/* Layoute route must have a hole as a parent for its children so that react-router can find the route that matches the url. otherwise, it overwrites all the route */}
               <Route index element={<Home />} />
               <Route path="about" element={<About />} />

               <Route path="vans">
                     <Route index element={<Vans />} />
                     <Route path=":id" element={<VanDetails />} />
               </Route>
               
               
               <Route path="host" element={<HostLinks />}>
                  {/*  Nested routes are used when you want to keep displaying some UI on the page, but also want to display more */}
                  <Route index element={<Dashboard />} />
                  <Route path="income" element={<Income />} />
                  <Route path="reviews" element={<Reviews />} />
               </Route>
            </Route>
         </Routes>
      </Container>
   );
    
};
export default Main;

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
