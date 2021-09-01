const express = require('express');
const app = express();

const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/users', (req, res) => {
  let users = 
  [
    {name: "John Doe", age: 34},
    {name: "Mary Doe", age: 32},
    {name: "James Dean", age: 25}
  ]

  res.render('users', {users: users})
})


app.get('/', (req, res) => {
  let user = {
    name: "John Doe", 
    address: {
      street: "1200 Richmond",
      city: "Atlanta", 
      state: "GA"
    }
  }

  res.render('index', user)
})

app.listen(3000, () => {
  console.log('server is running...')
})