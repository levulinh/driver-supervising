import passport from 'passport';
import swaggerUi from 'swagger-ui-express';
import UserController from './controllers/userController';

const http = require('http');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const configs = require('./configs');

mongoose.connect(configs.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api/v1', router);

require('./services/passport');

app.use(passport.initialize());
app.use(passport.session());

UserController(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen({ port: process.env.PORT || 4000 }, () => console.log('Server ready '),
);
module.exports = app;
