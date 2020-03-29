const express = require("express");
const app = express();
const port = 3000;

const handlebars = require("express-handlebars");

const cast = {
  characters: [
    {
      name: "Michael Scott",
      title: "Regional Manager"
    },
    {
      name: "Dwight K Schrute",
      title: "Assistant to the Regional Manager"
    },
    {
      name: "Jim Halper",
      title: "Sales person"
    },
    {
      name: "Pam Beesly",
      title: "Secretary"
    }
  ]
};

app.set("view engine", "handlebars");

// console.log("current view engine:", app.get("view engine"));

app.engine(
  "handlebars",
  handlebars({
    layoutsDir: __dirname + "/views/layouts"
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { layout: "index", characters: cast.characters });
});

app.listen(port, () => console.log(`App listening to port ${port}`));
