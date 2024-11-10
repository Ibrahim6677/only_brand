const Product = require("../Schema/product");
const factory = require("./handlerfactory");

// @desc  creatproduct
// @route post/api/product
// @access private
exports.creatProduct = factory.createone(Product);

// @desc  get all list of products
// @route get /api/products
// @acess public

exports.getProducts = factory.getall(Product);

// @desc  get a specific productby id
// @route get /api/product/:id
// @acess public
exports.getProduct = factory.getone(Product);

// @desc  update a specific productby id
// @route put /api/product/:id
// @acess private
exports.updateProduct = factory.updateone(Product);

// @desc  delete a specific productby id
// @route delate /api/product/:id
// @acess private
exports.deleteProduct = factory.deleteone(Product);
