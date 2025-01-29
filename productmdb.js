const Product = require('./product'); 

Product.find({ category: "Electronics", price: { $gt: 500 } }).sort({ price: -1 })
     .then(products => console.log(products))
  .catch(err => console.error(err));
