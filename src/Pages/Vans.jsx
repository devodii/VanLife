import React, { useState, useEffect, useMemo } from "react";
import { useId } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { getVans } from "../api";

export function loader() {
   return getVans();
}

function Vans() {

   // const [vanData, setVanData] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   const typeFilter = searchParams.get("type");
   const [error, setError] = useState(null);
   const data = useLoaderData();
   console.log(data)

   // useEffect(() => {
   //       (async function loadVans() {
   //       try {
   //          const data = await getVans();
   //          setVanData(data);
   //       } catch (error) {
   //          setError(error);
   //       } 
   //    })();
     
   // }, []);

   const filteredVans = typeFilter
      ? data.filter((each) => each.type === typeFilter)
      : data;

   const vanElements = filteredVans.map((van) => {
      const c = van.type === "rugged" ? "pink" : "green";
      return (
         <div key={van.id} className="body">
            <Link
               to={`${van.id}`}
               state={{
                  search: `?${searchParams.toString()}`,
                  name: typeFilter,
               }}
            >
               <img src={van.photo} alt="" />
               <div>
                  <h3>{van.name}</h3>
                  <p>${van.price}</p>
               </div>
               <i style={{ backgroundColor: c, padding: "5px 15px" }}>
                  {van.type}
               </i>
            </Link>
         </div>
      );
   });
   const simpleSelected = {
      backgroundColor: "lightgreen",
      padding: "5px 20px",
      border: "none",
   };
  
   if (error) {
      return <h1>There was an error: {error.message}</h1>;
   }

    console.timeEnd("label");
   return (
      <>
         <>
            <h2>Explore our van options</h2>
            <div>
               {/* <Link to="?type=rugged">Rugged</Link>
            <Link to="?type=simple">&nbsp; Simple</Link>
            <Link to=".">&nbsp; All</Link> */}
               <button
                  onClick={() => setSearchParams({ type: "rugged" })}
                  className={`${typeFilter === "rugged" ? "selected" : null}`}
               >
                  Rugged
               </button>{" "}
               &nbsp;
               <button
                  onClick={() => setSearchParams({ type: "simple" })}
                  style={typeFilter === "simple" ? simpleSelected : null}
               >
                  Simple
               </button>{" "}
               &nbsp;
               {typeFilter && (
                  <button onClick={() => setSearchParams({})}>Clear</button>
               )}
            </div>
            <Container>
               {vanElements.length > 0 ? (
                  vanElements
               ) : (
                  <p>Vans are unavailable a the moment</p>
               )}
            </Container>
         </>
      </>
   );
}

const Container = styled.div`
   display: grid;
   grid-gap: 20px;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

   .body {
      border: 1px solid red;
      height: auto;
      padding-block: 10px;
   }
`;
export default Vans;
