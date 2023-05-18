import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Link, Outlet, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import HostVanDetailsLayout from "./HostVanDetailsLayout";
import { getHostVans } from "../../api";
import { requireAuth  } from "../../api";
export async function loader({ params, request }) {
   console.log({ request });
   const url = new URL(request.url)
   console.log(url);
   await requireAuth()
   return getHostVans(params.id)
}
const HostVanDetails = () => {
   const van = useLoaderData()
   const style = {
      color: "inherit",
      wordSpacing: "1px",
      textDecoration: "none",
   };


   return (
      <div>
         <h2>Host Van Detail page - {}</h2>
         <Link style={style} to=".."
         relative="path">
            &larr; Back to all vans
         </Link>
         <br />
         {van && (
            <Container>
               <img src={van.photo} alt="" />

               <div>
                  <h2>{van.name}</h2>
                  <p>
                     $<b>{van.price}</b>/day
                  </p>
               </div>
            </Container>
         )}

         <HostVanDetailsLayout />
         <Outlet context={{ van }}/>
         
      </div>
   );
};

const Container = styled.div`
   display: flex;
   margin-top: 20px;
   gap: 10px;
   align-items: center;
`;

export default HostVanDetails;
