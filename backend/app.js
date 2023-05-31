var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var session = require('express-session');

secured = async(req,res,next)=> {
  try{
    if (req.session.id_user){
      next();
    } else{
      res.redirect('/admin/login');
    }
  }catch(error){
    console.log(error);
  }
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var menuRouter = require('./routes/menu');
var nosotrosRouter = require('./routes/nosotros');
var contactoRouter = require('./routes/contacto');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/sucursales');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'9mQXCtfB9HONoN18AsAq53aVObE39KR7',
  resave: false,
  saveUninitialized:true
}));

app.use('/', indexRouter);
// app.use('/users', usersRouter);


app.use('/menu', menuRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/contacto', contactoRouter);
app.use('/admin/login',loginRouter);
app.use('/admin/sucursales', secured, adminRouter);


app.get('/usuarios',function(req,res){
  res.send("Página de usuarios")
})
app.get('/productos',function(req,res){
  res.send("Página de productos")
})
// app.get('/combos',function(req,res,next){
//   res.send("Página de combos")
// })
app.get('/sucursales',function(req,res){
  res.send("Página de sucursales")
})
app.get('/eventos',function(req,res){
  res.send("Página de eventos")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;