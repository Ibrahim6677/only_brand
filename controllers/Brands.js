const Brands = require("../Schema/Brands");
const factory = require("./handlerfactory");

// @desc  creatbrand
// @route post/api/brand
// @access private
exports.creatbrand = factory.createone(Brands);


// @desc  get all list of brands
// @route get /api/brand
// @acess public
exports.getbrands = factory.getall(Brands)


// @desc  get a specific  brand by id
// @route get /api/brand/:id
// @acess public
exports.getbrand =factory.getone(Brands)

// @desc  update a specific brand id
// @route put /api/brand/:id
// @acess private
exports.updatebrand = factory.updateone(Brands);

// @desc  delete a specific Brand by id
// @route delate /api/brand/:id
// @acess private
exports.deletebrand = factory.deleteone(Brands);
