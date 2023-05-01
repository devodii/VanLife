const express = require("express");
const cors = require("cors");
const app = express();
const port = 3005;

const vans = [
   {
      id: 1,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deserunt. Accusamus labore accusantium est sunt vero magnam, sit corporis vel?",
      name: "Simple Model",
      photo: "/Images/images.jpeg",
      price: 1200,
   },
   {
      id: 2,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deserunt. Accusamus labore accusantium est sunt vero magnam, sit corporis vel?",
      name: "Cruiz!",
      photo: "/Images/images.jpeg",
      price: 1500,
   },
   {
      id: 3,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deserunt. Accusamus labore accusantium est sunt vero magnam, sit corporis vel?",
      name: "Vann",
      photo: "/Images/images.jpeg",
      price: 1200,
   },
];

app.use(cors());
app.get("/vans", (req, res) => {
   console.log(req.url);
   res.send(vans);
});
app.get("/vans/:id", (req, res) => {
   const vanId = req.params.id;
   const filteredVan = vans.find(van => van.id === parseInt(vanId));
   if (!filteredVan) {
      return res.status(404).json("Van not found");
   }

   res.json(filteredVan);
});


app.listen(port || 3001, () => console.log(`Listening on port ${port}`));
