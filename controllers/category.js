const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const categorySchema = require("../Schema/category");
const ApiError = require("../utils/ApiError");
const ApiFeature = require("../utils/apiFeatures");
const factory = require("./handlerfactory");



// @desc  creatcategory
// @route post/api/category
// @access private
exports.creatcategory = asyncHandler(async (req, res) => {
  const {name}=req.body;
  const category = await categorySchema.create({ name, slug: slugify(name) });
  res
    .status(201)
    .json({ data: category, message: "category added successfully" });
});

// @desc  get all list of category
// @route get /api/category
// @acess public
exports.getcategories = asyncHandler(async (req, res) => {
  const documentscount = await categorySchema.countDocuments();
  const apiFeatures = new ApiFeature(categorySchema.find(), req.query)
    .sort()
    .filter()
    .limitFields()
    .keyword()
    .paginate(documentscount);
  const { mongooseQuery, paginationResult } = apiFeatures;

  const catergories = await mongooseQuery;
  res
    .status(200)
    .json({ results: catergories.length,paginationResult, data: catergories });
});

// @desc  get a specific categoryby id
// @route get /api/category/:id
// @acess public

exports.getcategory = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const category = await categorySchema.findById(id);
  if (!category) {
    // res.status(404).json({ message: `no category for this id ${id}` });
    return next(new ApiError(`no category for this id ${id}`, 404));
  }
  res.status(200).json({ data: category });
});

// @desc  update a specific categoryby id
// @route put /api/category/:id
// @acess private

exports.updatecategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await categorySchema.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!category) {
    // res.status(404).json({ message: `no category for this id ${id}` });
    return next(new ApiError(`no category for this id ${id}`, 404));
  }
  res.status(200).json({ data: category });
});

// @desc  delete a specific categoryby id
// @route delate /api/category/:id
// @acess private
exports.deletecategory = factory.deleteone(categorySchema)
// exports.deletecategory = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const category = await categorySchema.findByIdAndDelete({ _id: id });
//   if (!category) {
//     // res.status(404).json({ message: `no category for this id ${id}` });
//     return next(new ApiError(`no category for this id ${id}`, 404));
//   }
//   res.status(204).send();
//   //  res .status(200)
//   // .json({ data: category, msg: "category deleted successfully" });
// });
