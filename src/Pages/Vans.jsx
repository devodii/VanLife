import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Vans() {
   const [vanData, setVanData] = useState([]);

   useEffect(() => {
      fetch("http://localhost:3005/vans")
         .then((response) => response.json())
         .then(setVanData);
   }, []);
   console.log(vanData);


   const vanElements = useMemo(() => {
      return vanData.map((van) => {
         return (
            <div key={van.id} className="body">
               <Link to={`/vans/${van.id}`}>
                  <img src={van.photo} alt="" />
                  <div>
                     <h3>{van.name}</h3>
                     <p>${van.price}</p>
                  </div>
                  <i>{van.type}</i>
               </Link>
            </div>
         );
      });
   }, [vanData]) ;
   return (
      <>
         <h2>Explore our van options</h2>
         <Container>{vanElements}</Container>
      </>
   );
}

const Container = styled.div`
   display: grid;
   grid-gap: 20px;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

   .body {
      border: 1px solid red;
   }
`;
export default Vans;
