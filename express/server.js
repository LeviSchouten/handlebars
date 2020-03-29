const express = require("express");
const app = express();
const port = 3500;
const axios = require("axios");

const handlebars = require("express-handlebars");

async function getUser(res) {
  try {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    // console.log(response.data);
    res.render("main", { layout: "index", films: response.data });
  } catch (error) {
    console.error(error);
  }
}

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

app.set("view engine", "hbs");

// console.log("current view engine:", app.get("view engine"));

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs"
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  getUser(res);
});

app.listen(port, () => console.log(`App listening to port ${port}`));
