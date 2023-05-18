import React, { useEffect, useState } from "react";
import {
   useParams,
   Link,
   useLocation,
   useNavigate,
   useLoaderData,
} from "react-router-dom";
import { getVans } from "../api";

export function vanDetailLoader({ params }) {
   console.log({ params });
   return getVans(params.id);
}
const VanDetails = () => {
   const location = useLocation();
   const navigate = useNavigate();

   const data = useLoaderData();

   const previousUrl = location.state?.search || "";
   const prevName = location.state.name || "all";
   return (
      <div>
         <br />
         <Link
            to={`..${previousUrl}`}
            relative="path"
         >{`Back to ${prevName} vans`}</Link>
         <br />
         <br />

         <div>
            <img src={data.photo} alt="" height={250} />
            <h1>{data.name}</h1>
            <p>${data.price} / day</p>
            <p>{data.description}</p>
            <button onClick={() => navigate(-1)}>Rent this van</button>
         </div>
      </div>
   );
};

export default VanDetails;
