const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.get('/movies/:genre/year/:year', (req, res) => {
  console.log(req.params.genre)
  console.log(req.params.year)
  
  res.send('Movies Route')
})

app.listen(PORT, () => {
  console.log("Server is running on PORT 3000")
});