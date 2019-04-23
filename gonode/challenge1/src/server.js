const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'njk');

app.use(require('./routes'));

app.listen(process.env.port || 3000);
