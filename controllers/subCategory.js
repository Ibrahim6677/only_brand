const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const subCategorySchema = require("../Schema/subCategory");
const ApiError = require("../utils/ApiError");
const ApiFeature = require("../utils/apiFeatures");
const factory = require("./handlerfactory");

// @desc  creat subcategory
// @rout post/api/subcategory
// @access private

exports.setcategoryidToBody = (req, res, next) => {
  //  Nasted route
  if (!req.body.category) {
    req.body.category = req.params.categoryid;
  }
  next();
};

exports.creatsubcategory = asyncHandler(async (req, res) => {
  const { name, category } = req.body;
  const subCategory = await subCategorySchema.create({
    name,
    slug: slugify(name),
    category,
  });
  // .populate({ path: "category", select: "name -_id" });
  res
    .status(201)
    .json({ data: subCategory, message: "subcategory added successfully" });
});
//  middleware Nasted Route => access route( get subcategories) from another route(:categoryid)
// get /api/category/:categoryId/subcategories
// realationship between parent => child
exports.creatfileobject = (req, res, next) => {
  let filtreObject = {};
  if (req.params.categoryid) filtreObject = { category: req.params.categoryid };
  req.filterobj = filtreObject;
  next();
};

// @desc  get all list of subcategory
// @route get /api/subcategory
// @acess public
exports.getsubcategories = asyncHandler(async (req, res) => {
  const documentscount = await subCategorySchema.countDocuments();
  const apiFeatures = new ApiFeature(subCategorySchema.find(), req.query)
    .sort()
    .filter()
    .limitFields()
    .keyword()
    .paginate(documentscount);
  const { mongooseQuery, paginationResult } = apiFeatures;

  const Subcatergories = await mongooseQuery;
  res
    .status(200)
    .json({
      results: Subcatergories.length,
      paginationResult,
      data: Subcatergories,
    });
});

// @desc  get a specific subcategoryby id
// @route get /api/subcategory/:id
// @acess public

exports.getsubcategory = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const Subcategory = await subCategorySchema
    .findById(id)
    .populate({ path: "category", select: "name -_id" });
  if (!Subcategory) {
    // res.status(404).json({ message: `no subcategory for this id ${id}` });
    return next(new ApiError(`no subcategory for this id ${id}`, 404));
  }
  res.status(200).json({ data: Subcategory });
});

// @desc  update a specific categoryby id
// @route put /api/category/:id
// @acess private

exports.updatesubcategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, category } = req.body;

  const subcategory = await subCategorySchema.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name), category },
    { new: true }
  );
  if (!subcategory) {
    // res.status(404).json({ message: `no subcategory for this id ${id}` });
    return next(new ApiError(`no subcategory for this id ${id}`, 404));
  }
  res.status(200).json({ data: subcategory });
});

// @desc  delete a specific subcategoryby id
// @route delate /api/subcategory/:id
// @acess private
exports.deletesubcategory = factory.deleteone(subCategorySchema);
// exports.deletesubcategory = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const subcategory = await subCategorySchema.findByIdAndDelete({ _id: id });
//   if (!subcategory) {
//     // res.status(404).json({ message: `no subcategory for this id ${id}` });
//     return next(new ApiError(`no subcategory for this id ${id}`, 404));
//   }
//   res.status(204).send();
//   //  res .status(200)
//   // .json({ data: subcategory, msg: "category deleted successfully" });
// });
