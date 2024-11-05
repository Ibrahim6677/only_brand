const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const Brands = require("../Schema/Brands");
const ApiError = require("../utils/ApiError");
const ApiFeature = require("../utils/apiFeatures");
const factory = require("./handlerfactory");

// @desc  creatbrand
// @route post/api/brand
// @access private
exports.creatbrand = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const brand = await Brands.create({ name, slug: slugify(name) });
  res.status(201).json({ data: brand, message: "brand added successfully" });
});

// @desc  get all list of brands
// @route get /api/brand
// @acess public
exports.getbrands = asyncHandler(async (req, res) => {
  const documentscount = await Brands.countDocuments();
  const apiFeatures = new ApiFeature(Brands.find(), req.query)
    .sort()
    .filter()
    .limitFields()
    .keyword()
    .paginate(documentscount);
  const { mongooseQuery, paginationResult } = apiFeatures;

  const brand = await mongooseQuery;
  res
    .status(200)
    .json({ results: brand.length, paginationResult, data: brand });
});

// @desc  get a specific  brand by id
// @route get /api/brand/:id
// @acess public

exports.getbrand = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const brand = await Brands.findById(id);
  if (!brand) {
    // res.status(404).json({ message: `no Brand for this id ${id}` });
    return next(new ApiError(`no brand for this id ${id}`, 404));
  }
  res.status(200).json({ data: brand });
});

// @desc  update a specific brand id
// @route put /api/brand/:id
// @acess private

exports.updatebrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const brand = await Brands.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!brand) {
    // res.status(404).json({ message: `no brand for this id ${id}` });
    return next(new ApiError(`no brand for this id ${id}`, 404));
  }
  res.status(200).json({ data: brand });
});

// @desc  delete a specific Brand by id
// @route delate /api/brand/:id
// @acess private
exports.deletebrand = factory.deleteone(Brands);
// exports.deletebrand = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const brand = await Brands.findByIdAndDelete({ _id: id });
//   if (!brand) {
//     // res.status(404).json({ message: `no brand for this id ${id}` });
//     return next(new ApiError(`no brand for this id ${id}`, 404));
//   }
//   res.status(204).json({});
//   //  res .status(200)
//   // .json({ data: category, msg: "brand deleted successfully" });
// });
