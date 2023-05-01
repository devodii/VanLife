import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetails = () => {
   const params = useParams();
   const [data, setData] = useState(null);

   useEffect(() => {
      fetch(`http://localhost:3005/vans/${params.id}`)
         .then((res) => res.json())
         .then(setData)
         .catch((err) => console.log(err));
   }, [params]);
   console.log(data);

   return (
      <div>
         Van Details
         {data ? (
            <div>
               <img src={data.photo} alt="" height={250} />
                   <h1>{data.name}</h1>
                   <p>${data.price} / day</p>
                   <p>{data.description}</p>
                   <button>Rent this van</button>
            </div>
         ) : (
            <p>Loading...</p>
         )}
      </div>
   );
};

export default VanDetails;
