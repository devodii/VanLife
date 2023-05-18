import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <div>
         <h1 >You've got the travel, we got the travel vans. </h1>
         <p>
            Add adventure to your life by joining the vanlife movement and make
            your perfect road trip.
         </p>
         <Link to="/vans" title="Find vans">Find your vans</Link>
      </div>
   );
};

export default Home;
