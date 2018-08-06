const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.get('/', (req, res) => {
  res.json({ok: true});
});

app.listen(8080);
