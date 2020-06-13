const express = require('express');
const router = express.Router();

// For Products - we want to GET, POST
// We will now set up a GET and POST route

//GET Product
router.get( '/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /products'
  });
});
//POST Product
router.post( '/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST requests to /products'
  });
});

//GET Product ID - one product
router.get('/:productId', (req, res, next) => {
  //productId becuse that is the name we chose in our router code above
  const id = req.params.productId;
  //url localhost:3000/products/special
  if (id === 'special') {
    res.status(200).json({
      message: "You discovered the special id!",
      id: id
    });
  } else {
      res.status(200).json({
        message: "You successfully passed an ID",
        id: id
      });
  }
});

//UPDATE information of r ProductId
router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: "Updated product!"
  });
});
//DELETE
router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: "Deleted product!"
  });
});






//The router with the routes we configured is exported and can be used in other files -- aka app.js where we import these routes
module.exports = router;
