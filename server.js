const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const models = require('./app/models');

app.use(cookieParser());
app.use(fileUpload());

// method override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// handlebars settings
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main', layoutsDir: './app/views/layouts' }));
app.set('view engine', 'handlebars');
app.set('views', './app/views');

// category sidebar
const sidebar = require('./sidebar');
app.use(sidebar);

// bodyparser settings
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (req.cookies.token) {
    models.Token.findOne({
      where: {
        token: req.cookies.token
      }
    }).then(tokenRecord => {
      if (!tokenRecord) next();
      tokenRecord.getUser().then(userRecord => {
        res.locals = res.locals || {};
        req.user = res.locals.user = userRecord;
        console.log(req.user);
        next();
      });
    });
  } else {
    next();
  }
});

const users = require('./app/controllers/users');
app.use('/users', users);

// api controllers
const api = require('./app/controllers/api');
app.use('/api', api);

const searches = require('./app/controllers/searches');
app.use('/search', searches);

const admin = require('./app/controllers/admin');
app.use('/admin', admin);

const categories = require('./app/controllers/categories');
app.use('/categories', categories);

const products = require('./app/controllers/products');
app.use('/products', products);

const comments = require('./app/controllers/comments');
app.use('/comments', comments);

const cart = require('./app/controllers/cart');
app.use('/cart', cart);

app.use(express.static('./public'));

// Index
app.get('/', (req, res) => {
  res.render('index.handlebars');
});

app.listen(8080);
