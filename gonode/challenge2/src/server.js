const express = require('express');
const session = require('express-session');
const LokiStore = require('connect-loki')(session);
const nunjucks = require('nunjucks');
const path = require('path');
const flash = require('connect-flash');
const dateFilter = require('nunjucks-date-filter');

class App {
  constructor () {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== 'production';

    this.middlewares();
    this.views();
    this.routes();
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }));
    // Handles the session and saves it inside local json files inside "tmp/sessions/session-store.db"
    this.express.use(flash());
    this.express.use(
      session({
        name: 'root',
        store: new LokiStore({
          path: path.resolve(__dirname, '..', 'tmp', 'session-store.db')
        }),
        secret: 'MyAppSecret',
        resave: true,
        saveUninitialized: true
      })
    );
  }

  views () {
    // Defines the views folder
    const env = nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    });

    env.addFilter('date', dateFilter);

    // Serves the "public" folder to make its content available
    this.express.use(express.static(path.resolve(__dirname, 'public')));
    this.express.set('view engine', 'njk');
  }

  routes () {
    this.express.use(require('./routes'));
  }
}

module.exports = new App().express;
