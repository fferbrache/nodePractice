const express = require('express');
const app = express();
const PORT = 3000;

app.get('/movies', (req, res) => {
  
  let movies = [{title: "Lord of the Rings", year: 2014 },
  {title: "Black Sheep", year: 1997 },
  {title: "Casino", year: 1993 }
  ]

  res.json(movies)
  
})

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT)
});