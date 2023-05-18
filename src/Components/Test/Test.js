
const Instructors = [
   { name: "👨‍💻Emmanuel Odii", language: "React" },
   { name: "Success", language: "Typescript" },
   { name: "Edaurdo Vedes", language: "Javascript" },
   { name: "Ryan Talbert", language: "Javascript" },
];

const FindJsMentor = () => (
      <section>
         {Instructors
            .filter((each) => each.language === "Javascript")
            .map((each) => (
               <div key={each.name}>{each.name}</div>
            ))}
      </section>
   );

export default FindJsMentor;
