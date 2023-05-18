import React, { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const HostVanPhotoDetails = () => {
   const { van } = useOutletContext();

   const style = {
      width: "100px",
      aspectRatio: "16/10",
      marginRight: "20px",
   };
   const otherPhotos =
      van &&
      van.otherPhotos?.map((each, index) => (
         <img src={each} style={style} key={index} />
      ));

   return (
      <div>
         <h2>Photo Details</h2>
         {otherPhotos ? otherPhotos : "No other photos"}
      </div>
   );
};

export default HostVanPhotoDetails;
