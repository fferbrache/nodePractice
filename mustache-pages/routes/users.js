const express = require('express');
const router = express.Router()

function authenticate(req, res, next) {

  if(req.session) {
    if(req.session.name) {
      next()
    } else {
      res.redirect('users/add-user')
    }
  } else {
    res.redirect('/users/add-user')
  }
}

router.get('/', (req, res) => {

  let user = {
    name: req.session.name,
    age: req.session.age, 
    address: {
      street: "1200 Richmond",
      city: "Atlanta", 
      state: "GA"
    }
  }

  res.render('index', user)
})

router.get('/add-user', (req, res) => {
  res.render('add-user')
})

router.get('/bank-accounts', authenticate, (req, res) => {
  res.send('Bank Accounts')
})

router.post('/add-user', (req, res) => {
  
  let name = req.body.name
  let age = req.body.age

  if(req.session) {
    req.session.name = name
    req.session.age = age

    // req.session.user = { name: name, age: age}
  }

  console.log(name)
  console.log(age)

  res.status(200).send()
})

router.get('/users', (req, res) => {

  let users = 
  [
    {name: "John Doe", age: 34},
    {name: "Mary Doe", age: 32},
    {name: "James Dean", age: 25}
  ]

  users = []

  res.render('users', {users: users})
})

module.exports = router