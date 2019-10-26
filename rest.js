let express = require('express')
let res = require('express-resource')
let app = express()
let bodyParser = require('body-parser');
let db = require('./models/index')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.json());
//最初のproducer.htmlの表現//
app.use(express.static('public'));



// register REST controllers
app.resource('producers', require('./controllers/producer'), {id: 'id'})


// start application
app.listen(3006)