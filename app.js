const express = require('express');
const app = express();

//import Morgan middleware package (login package)
const morgan = require('morgan');

//import body-parser package
const bodyParser = require('body-parser');

//import routes from the route folder
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//use morgan to help retrieve responses
app.use(morgan('dev'));
//user body parser to make urlencoded and json data more readable for us
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Routes for handling requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);




//ERROR handling
app.use( (req, res, next) => {
  const error = new Error('This route is NOT found!');
  error.status = 404;
  next(error);
});

app.use( (error, req, res, next) => {
  res.status( error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});


module.exports = app;
