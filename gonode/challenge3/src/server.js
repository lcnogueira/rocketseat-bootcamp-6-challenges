require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Youch = require('youch');
const Sentry = require('@sentry/node');
const validate = require('express-validation');
const databaseConfig = require('./config/database');
const sentryConfig = require('./config/sentry');

class App {
  constructor () {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== 'production';

    this.sentry();
    this.middlewares();
    this.database();
    this.routes();
    this.exception();
  }

  sentry () {
    Sentry.init(sentryConfig);
  }

  database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    });
  }

  middlewares () {
    this.express.use(express.json());
    this.express.use(Sentry.Handlers.requestHandler());
  }

  routes () {
    this.express.use(require('./routes'));
  }

  exception () {
    // If it's production and there is an error, log it on sentry
    if (process.env.NODE_ENV === 'production') {
      this.express.use(Sentry.Handlers.errorHandler());
    }

    // A middleware that handles the errors and return them as json
    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err);
      }

      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err, req);

        return res.json(await youch.toJSON());
      }

      // If it's not a validator error, return another kind of error
      return res
        .status(err.status || 500)
        .json({ error: 'Internal Server Error' });
    });
  }
}

module.exports = new App().express;
