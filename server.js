// Import Modules and set up vars
require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;

//connect to database
const db = require('./models/db.js')
db.once('open', () => {
  console.log('connected to mongo')
})

//Initialize View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

// Mount Express Middleware
app.use((req, res, next) => {
  res.locals.data = {}
  next()
}) 
// Creates res.locals.data
app.use(express.urlencoded({ extended: true })) // Creates req.body
app.use(methodOverride('_method')); // Allows us to override methods
app.use(express.static('public')); // Allows us to have Static Files
app.use('/comics', require('./controllers/routeController.js')); // Mounts our RESTFUL/INDUCES ROUTES at /comics

// Listen on PORT
app.listen(PORT, () => {
  console.log('HERESSS JOHNYYYY', PORT)
})