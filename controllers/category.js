const categorySchema = require("../Schema/category");
const factory = require("./handlerfactory");

// @desc  creatcategory
// @route post/api/category
// @access private
exports.creatcategory = factory.createone(categorySchema);

// @desc  get all list of category
// @route get /api/category
// @acess public
exports.getcategories = factory.getall(categorySchema);

// @desc  get a specific categoryby id
// @route get /api/category/:id
// @acess public
exports.getcategory = factory.getone(categorySchema);

// @desc  update a specific categoryby id
// @route put /api/category/:id
// @acess private
exports.updatecategory = factory.updateone(categorySchema);

// @desc  delete a specific categoryby id
// @route delate /api/category/:id
// @acess private
exports.deletecategory = factory.deleteone(categorySchema);
