import React from "react";
import { Link } from "react-router-dom";

const About = () => {
   return (
      <div>
         <div>
            <h1>Don't squeeze in a sedan when you could relax in a cool van</h1>
            <p>
               Our mission is to enliven your road trip with the protcted vans
               that are recertified before each trip to ensure you travel
               without a hitch. (hitch costs extra)
            </p>
            <p>
               Our team is full of vanlife enthusiasts who know about the world
               of wheels.{" "}
            </p>

            <div>
               <h2>
                  Your destination is waiting. <br /> Your van is ready{" "}
               </h2>
               <Link to="/vans">Explore our vans</Link>
            </div>
         </div>
      </div>
   );
};

export default About;
