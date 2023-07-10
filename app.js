const { engine } = require('express-handlebars')
const express = require('express')
const app = express()
const port = 3000
const restaurants = require('./public/jsons/restaurant.json').results
const BASE_IMG_URL = ''

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))

app.get('/', (req, res) => {
 res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.render('index', {restaurants: restaurants})
})

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  const restaurant = restaurants.find((restaurant) => restaurant.id.toString() === id)
  res.render(`show`, {restaurant})
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})