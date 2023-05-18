import { useMemo } from "react";
import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { getHostVans } from "../../api";
import { requireAuth } from "../../api";

export async function HostVanLoader() {
   await requireAuth()
   return getHostVans()
}

const HostVans = () => {

   const style = {
      textDecoration: "none",
      color: "inherit",
   };

   const HostVan = useLoaderData();
   console.log(HostVan)

   const HostVanElements = useMemo(() => {
      return HostVan.map((van) => (
         <Link to={`${van.id}`} style={style}>
            <Container>
               <img src={van.photo} alt="Van" />
               <div>
                  <h2>{van.name}</h2>
                  <p>${van.price}</p>
                  <p>
                     <b>Type: </b> <span>{van.type}</span>
                  </p>
               </div>
          
            </Container>
         </Link>
      ));
   }, [HostVan]);
   console.log({ HostVanElements });
   return (
      <div>
         <h2>Your listed vans</h2>
         {HostVan.length > 0 ? (
            HostVanElements
         ) : (
            <p>You have not listed any van here.</p>
         )}
         {JSON.stringify(HostVan, ["id", "price"], 2)};
      </div>
   );
};

const Container = styled.div`
   display: flex;
   gap: 20px;
   align-items: center;
`;
export default HostVans;

// const FetchVan = async () => {
//    const data = await fetch("http://localhost:3005/HostVans");
//    const response = data.json();
//    console.log(response);
//    setHostVan(response);
// };
// FetchVan();
