var createError = require('http-errors');
var express = require('express');
var path = require('path'); // for path.join()
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

var app = express();

/* view engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/* setting req-res Configs */
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

/* Router Mounting */
// app.use('/', indexRouter);
// app.use('/users', usersRouter);








/* catch 404 and forward to error handler */
app.use(function(req, res, next) {
  next(createError(404)); // createError([status], [message]) 
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals : - An object that contains response local variables scoped to the request, and therefore available only to the view(s)
  // rendered during that request / response cycle (if any). Otherwise, this property is identical to app.locals.
  // This property is useful for exposing request-level information such as the request path name, authenticated user,
  //  user settings, and so on.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
