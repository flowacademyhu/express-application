const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: './app/views/layouts'}));
app.set('view engine', 'handlebars');
app.set('views', './app/views');

const users = require('./app/controllers/users');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/users', users);

const api = require('./app/controllers/api');
app.use('/api', api);

const categories = require('./app/controllers/categories');
app.use('/categories', categories);

const products = require('./app/controllers/products');
app.use('/products', products);

app.use(express.static('./public'));

app.listen(8080);
