
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(bodyParser.urlencoded({extended: false}))

app.get('/add-user', (req, res) => {
  res.render('add-user')
})

app.post('/add-user', (req, res) => {
  
  let name = req.body.name
  let age = req.body.age

  console.log(name)
  console.log(age)

  res.status(200).send()
})

app.get('/users', (req, res) => {

  let users = 
  [
    {name: "John Doe", age: 34},
    {name: "Mary Doe", age: 32},
    {name: "James Dean", age: 25}
  ]

  users = []

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