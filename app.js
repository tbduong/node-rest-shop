const express = require('express');
const app = express();

//import products routes
const productRoutes = require('./api/routes/products');
// "filter for products" -- Anything starting /products url will funnel into our product route (product.js)
app.use('/products', productRoutes);

app.use((req, res, next) => {
  res.status(200).json({
    message: "Server works!"
  });
});

module.exports = app;
