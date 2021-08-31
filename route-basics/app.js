const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.get('/movies', (req, res) => {
console.log(req.query.sort)
console.log(req.query.page)

  res.send('Movies')
})

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT)
});