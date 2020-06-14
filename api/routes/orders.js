//This will be where all order routing will be handled
const express = require('express');
const router = express.Router();

//GET Orders
router.get( '/', (req, res, next) => {
  res.status(201).json({
    message: 'Orders were fetched'
  });
});

//POST orders
router.post( '/', (req, res, next) => {
  res.status(200).json({
    message: 'Order was created'
  });
});


//GET individual Order by ID
router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    orderId: req.params.orderId,
    message: "Order was successfull fetched"
  });
});

//DELETE Individual order by ID
router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    orderId: req.params.orderId,
    message: "Order has been successfully deleted"
  });
});

//The router with the routes we configured is exported and can be used in other files -- aka app.js where we import these routes
module.exports = router;
