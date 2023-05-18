import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const Members = [
   { name: "Emmanuel", cat: "alabaster" },
   { name: "Silas Inegbe", cat: "media" },
   { name: "King Inegbe", cat: "alabaster" },
   { name: "Glden Richard", cat: "media" },
];

const Test = () => {
   const [searchParam, setSearchParam] = useSearchParams();
   const catFilter = searchParam.get("cat");
   const nameF = searchParam.get("name");
   console.log(catFilter);

   const displayedMembers = catFilter
      ? Members.filter((each) => each.cat.toLowerCase() === catFilter)
      : Members;

   const IteratedMembers = displayedMembers.map((member) => {
      const firstName = Array.from(member.name.split(" "));

      return (
         <div key={member.name}>
            <>
               <p>
                  <b
                     style={{
                        color:
                           member.cat.toLowerCase() === "media"
                              ? "green"
                              : "red",
                     }}
                  >
                     {firstName[0]}
                  </b>
               </p>
               <span>{member.cat}</span>
            </>
         </div>
      );
   });

   // Generating a query unique string and merging with other queries to other queries
   function genNewSearchParam(key, value) {
      const sp = new URLSearchParams(searchParam);
      if (value == null) {
         sp.delete(key);
      } else {
         sp.set(key, value);
      }
      return `?${sp.toString()}`;
   }

   function handleFilterChange(key, value) {
      setSearchParam((prevParam) => {
         if (value == null) prevParam.delete(key);
         else {
            prevParam.set(key, value);
         }
         return prevParam;
      });
   }

   return (
      <div>
         <h1>Test</h1>
         <Link to={genNewSearchParam("cat", "alabaster")}>Alabaster</Link>
         <Link to={genNewSearchParam("cat", "media")}>&nbsp; Media</Link>
         <Link to={genNewSearchParam("cat", null)}>&nbsp; All</Link>
         <br />
         <br />
         {/* <button onClick={() => setSearchParam("cat=alabaster")}>Alabaster</button> &nbsp;
         <button onClick={() => setSearchParam("cat=media")}>Media</button> &nbsp;
         <button onClick={() => setSearchParam(".")}>All links</button> <br /> <br /> */}
         <button onClick={() => setSearchParam({ cat: "alabaster" })}>
            Alabaster
         </button>{" "}
         &nbsp;
         <button onClick={() => setSearchParam({ cat: "media" })}>
            Media
         </button>{" "}
         &nbsp;
         <button onClick={() => setSearchParam({})}>All links</button>
         <br />
         <br />
         <br />

         
         Merging results <br />
         <button onClick={() => handleFilterChange("cat", "alabaster")}>
            Alabaster
         </button>{" "}
         &nbsp;
         <button onClick={() => handleFilterChange("cat", "media")}>
            Media
         </button>{" "}
         &nbsp;
         <button onClick={() => setSearchParam("cat", null)}>All links</button>
         {IteratedMembers}
      </div>
   );
};

export default Test;
