const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: './app/views/layouts'}));
app.set('view engine', 'handlebars');
app.set('views', './app/views');

const users = require('./app/controllers/users');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/users', users);

// const kutyafule = express.Router();

// kutyafule.get('/kecske/hegyi', (req, res) => {
//   res.send('mekk');
// });

// app.use('/kakukk', kutyafule);

app.listen(8080);
