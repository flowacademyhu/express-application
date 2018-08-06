const express = require('express');
const app = express();

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: './app/views/layouts'}));
app.set('view engine', 'handlebars');
app.set('views', './app/views');

const users = require('./app/controllers/users');
app.use('/users', users);

app.listen(8080);
