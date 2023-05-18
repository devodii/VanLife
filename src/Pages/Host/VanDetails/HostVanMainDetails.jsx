import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

const HostVanMainDetails = () => {
   const { van } = useOutletContext();

   const Markup = useMemo(
      () => (
         <>
            <b>Name: </b> <span>{van?.name}</span>
            <p>
               <b>Category:</b> <span>{van?.category || "null"}</span>
            </p>
            <p>
               <b>Type:</b> <span>{van?.type || "unknown"}</span>
            </p>
            <article>
               <b>Decription: </b> <span>{van?.description}</span>
            </article>
         </>
      ),
      [van]
   );
   return <div style={{ marginTop: "20px" }}>{Markup}</div>;
};

export default HostVanMainDetails;
