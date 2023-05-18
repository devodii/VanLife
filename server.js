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
      type: 'simple'
   },
   {
      id: 2,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deserunt. Accusamus labore accusantium est sunt vero magnam, sit corporis vel?",
      name: "Cruiz!",
      photo: "/Images/images.jpeg",
      price: 1500,
      type: 'rugged'
   },
   {
      id: 3,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deserunt. Accusamus labore accusantium est sunt vero magnam, sit corporis vel?",
      name: "Vann",
      photo: "/Images/images.jpeg",
      price: 1200,
      type: 'simple'
   },
];

const HostVans = [
   {
      id: 1,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deserunt. Accusamus labore accusantium est sunt vero magnam, sit corporis vel?",
      name: "Simple Model",
      photo: "/Images/images(1).jpeg",
      otherPhotos: ["/Images/images(1).jpeg", "/Images/images(1).jpeg"],
      price: 1000,
      type: 'rugged'
   },
   {
      id: 2,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deserunt. Accusamus labore accusantium est sunt vero magnam, sit corporis vel?",
      name: "Cruiz!",
      otherPhotos: ["/Images/images(2).jpeg", "/Images/images(2).jpeg"],
      photo: "/Images/images(2).jpeg",
      price: 1500,
      type: "rugged"
   },
   {
      id: 3,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deserunt. Accusamus labore accusantium est sunt vero magnam, sit corporis vel?",
      name: "Vann",
      otherPhotos: ["/Images/images(3).jpeg", "/Images/images(3).jpeg"],
      photo: "/Images/images(3).jpeg",
      price: 1200,
      type: 'simple'
   },
   {
      id: 4,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deserunt. Accusamus labore accusantium est sunt vero magnam, sit corporis vel?",
      name: "Vann",
      otherPhotos: ["/Images/images.jpeg", "/Images/images.jpeg"],
      photo: "/Images/images.jpeg",
      price: 1800,
      type: "simple"
   },
];

app.use(cors());
app.get("/vans", (req, res) => {
   res.send(vans);
});
app.get('/HostVans', (req, res) => {
   res.json(HostVans)
})
app.get('/HostVans/:id', (req, res) => {
   const VanId = req.params.id;
   const filteredVan = HostVans.find(van => van.id === parseInt(VanId));
   if (!filteredVan) res.status(400).json('Van not found in host store')
   res.json(filteredVan);
})
app.get("/vans/:id", (req, res) => {
   const vanId = req.params.id;
   const filteredVan = vans.find(van => van.id === parseInt(vanId));
   if (!filteredVan) {
      return res.status(404).json("Van not found");
   }

   res.json(filteredVan);
});


app.listen(port || 3001, () => console.log(`Listening on port ${port}`));


