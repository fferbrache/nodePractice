const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// setting up body parser to parse json
app.use(bodyParser.json());

app.get('/movies',(req,res) => {
  res.send('Movies')
})

app.post('/movies',(req,res) => {
  let title = req.body.title
  let year = req.body.year
  let revenue = req.body.revenue
  console.log(title)
  console.log(year)
  console.log(revenue)
  res.send('Ok')
})

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT)
});