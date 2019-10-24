let express = require('express')
let res = require('express-resource')
let app = express()
app.use(express.json())

// register REST controllers
app.resource('producers', require('./controllers/producer'), {id: 'id'})

// start application
app.listen(3006)