const express = require('express');
const axios = require('axios');
const app = express();

const handlebars = require('express-handlebars');

const port = 3000;

function getFilmData(res) {
  axios.get('https://ghibliapi.herokuapp.com/films')
  .then((data) => res.render('main', {layout: 'index', title: data}));
}

// const filmData = async () => {
//   const result = await axios.get('https://ghibliapi.herokuapp.com/films')
//   .then(response => {
//     return response.data
//   });
// }

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs'
}));

app.use(express.static('public'));

app.get('/', (req, res) => getFilmData(res));

app.listen(port, () => console.log(`App listening to port ${port}`));
