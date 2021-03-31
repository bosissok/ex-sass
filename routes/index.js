var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./data/movie.json', 'utf8', (err, data) => {
    if(err) {
      console.error(err)
      return
    }
    let movies = JSON.parse(data)
      console.log(movies)
      // console.log(data)
      res.render('index', { title: 'Express', mesFilms: movies});
  })
 
  // let film1 = {
  //   actors: ['Tim Curry', 'Emily Perkins', 'Seth Green'], 
  //   category: "Drama", 
  //   date: "18 novembre 1990", 
  //   description: "Octobre 1957. Ça se réveille et la petite ville de Derry dans le Maine ne sera plus jamais la même.", 
  //   image: {src: "public/images/il-est-revenu.jpeg"}, 
  //   realisator: "Stephen King", 
  //   title: {text: "ça",
  //   link: "#"}
  // };
  
  // let film2 = {
  //    actors: ['Tobey Maguire','Kirsten Dunst', 'Willemen Dafoe'], 
  //    category: "Action", date: "12 juin 2002", 
  //    description: "Orphelin, Peter Parker est élevé par sa tante May et son oncle Ben dans le quartier Queens de New York. Tout en poursuivant ses études à l'université, il trouve un emploi de photographe au journal Daily Bugle.", 
  //    image: {src: "publique/images/spiderman.jpg"}, 
  //    realisator: "Sami Raimi", 
  //    title: {text: "Spiderman",
  //    link: "#"}
  //   };

  //   let film3 = { 
  //     actors: ["Steven seagal"], 
  //     category: "Comédie", 
  //     date: "18 juillet 1997", 
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque voluptatem voluptatum qui placeat quo.", 
  //     image: {src: "images/films/film3.jpg"}, 
  //     realisator: "Patrick le réal", 
  //     title: {text: "Steven Action pack",
  //     link: "#"}
    // };

});

module.exports = router;
