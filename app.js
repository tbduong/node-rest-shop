const express = require('express');
const app = express();

//import Morgan middleware package (login package)
const morgan = require('morgan');


app.use(morgan('dev'));


//import products routes
const productRoutes = require('./api/routes/products');
app.use('/products', productRoutes);

//import orders routes
const orderRoutes = require('./api/routes/orders');
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
  res.status(200).json({
    message: "Server works!"
  });
});

module.exports = app;
