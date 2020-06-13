//This will be where all order routing will be handled
const express = require('express');
const router = express.Router();

//GET Orders
router.get( '/', (req, res, next) => {
  res.status(201).json({
    message: 'Orders were fetched'
  });
});

//POST ordersrouter.get( '/', (req, res, next) => {
router.post( '/', (req, res, next) => {
  res.status(200).json({
    message: 'Order was created'
  });
});


//The router with the routes we configured is exported and can be used in other files -- aka app.js where we import these routes
module.exports = router;
