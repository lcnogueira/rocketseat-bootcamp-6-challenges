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

app.listen(3000);

// const logMiddleware = (req, res, next) => {
//   console.log(`
//   HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`);

//   req.appName = 'GoNode';

//   return next();
// };

// app.use(logMiddleware);

// const users = ['Diego Fernandes', 'Robson Marques', 'Cleiton Souza']

// app.get('/', (req, res) => {
//   return res.render('list', { users })
// })

// app.get('/new', (req, res) => {
//   return res.render('new')
// })

// app.get('/nome/:name', (req, res) => {
//   return res.json({
//     message: `Welcome, ${req.params.name}`,
//   });
// });

// app.post('/create', (req, res) => {
//   users.push(req.body.user)
//   return res.redirect('/')
// })
