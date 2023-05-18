import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext, useParams, useSearchParams } from "react-router-dom";

const HostVanPriceDetails = () => {
   const { van } = useOutletContext();   
   
       
   const format = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: "USD",
      currencyDisplay: "symbol"
   })
  
   return (
      <section>
         <h2>Price</h2>
      
            {van ? (
               `${format.format(van.price)} /day`
            ) : (
               <p>Price not avaiable</p>
            )}
         
      </section>
   );
};

export default HostVanPriceDetails;
