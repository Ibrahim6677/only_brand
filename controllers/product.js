const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const Product = require("../Schema/product");
const ApiError = require("../utils/ApiError");
const ApiFeature = require("../utils/apiFeatures");
const factory = require("./handlerfactory");

// @desc  creatproduct
// @route post/api/product
// @access private
exports.creatProduct = asyncHandler(async (req, res) => {
  req.body.slug = slugify(req.body.title);
  const product = await Product.create(req.body);
  res
    .status(201)
    .json({ data: product, message: "product added successfully" });
});

// @desc  get all list of products
// @route get /api/products
// @acess public
exports.getProducts = asyncHandler(async (req, res) => {
  // fillering
  // const qureryStringobj = { ...req.query };
  // const excludefileds = ["page", "limit", "sort", "fields"];
  // excludefileds.forEach((field) => delete qureryStringobj[field]);
  // console.log(qureryStringobj);
  // console.log(req.query);

  // regular expression :Apply the filter by using[gte,gt,lte,lt ] by adding the operators{$}
  // let querystring = JSON.stringify(qureryStringobj);
  // querystring = querystring.replace(
  //   /\b(gte|gt|lte|lt)\b/g,
  //   (match) => `$${match}`
  // );
  // JSON.parse(querystring) converts the querystring to JSON object.
  // console.log(querystring);

  // pagination
  // const page = req.query.page * 1 || 1;
  // const limit = req.query.limit * 1 || 10;
  // const skip = (page - 1) * limit;

  // build query
  const documentscount = await Product.countDocuments();
  const apiFeatures = new ApiFeature(Product.find(), req.query)
    .sort()
    .filter()
    .limitFields()
    .keyword("products")
    .paginate(documentscount);
  const { mongooseQuery, paginationResult } = apiFeatures;

  const products = await mongooseQuery;
  res
    .status(200)
    .json({ results: products.length, paginationResult, data: products });

  // let queryproduct = Product.find(JSON.parse(querystring))
  //   .skip(skip)
  //   .limit(limit)
  //   .populate({ path: "category", select: "name -_id" });
  // .where("price").equals(req.query.Price)

  // sorting
  // ascending +  // descending -
  // if (req.query.sort) {
  //   const sortBy = req.query.sort.split(",").join(" ");
  //   queryproduct = queryproduct.sort(sortBy);
  // } else {
  //   queryproduct = queryproduct.sort("-createdAt");
  // }
  // fields limiting
  // if (req.query.fields) {
  //   const fields = req.query.fields.split(",").join(" ");
  //   queryproduct = queryproduct.select(fields);
  // } else {
  //   queryproduct = queryproduct.select("-__v");
  // }
  // searching
  // if(req.query.keyword){
  //   const query={};
  //   query.$or=[
  // {title: {$regex:req.query.keyword, $options:'i'}},
  // {description: {$regex:req.query.keyword, $options:'i'}},
  //   ]
  //   queryproduct=Product.find(query);
  // }
  //execute query
});

// @desc  get a specific productby id
// @route get /api/product/:id
// @acess public

exports.getProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate({
    path: "category",
    select: "name -_id",
  });
  if (!product) {
    // res.status(404).json({ message: `no product for this id ${id}` });
    return next(new ApiError(`no product for this id ${id}`, 404));
  }
  res.status(200).json({ data: product });
});

// @desc  update a specific productby id
// @route put /api/product/:id
// @acess private

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }

    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!product) {
      // res.status(404).json({ message: `no product for this id ${id}` });
      return next(new ApiError(`no product for this id ${id}`, 404));
    }
    res.status(200).json({ data: product });
  } catch (error) {
    next(new ApiError(error.message, 500));
  }
};

// @desc  delete a specific productby id
// @route delate /api/product/:id
// @acess private
exports.deleteProduct = factory.deleteone(Product);
// exports.deleteProduct = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const product = await Product.findByIdAndDelete({ _id: id });
//   if (!product) {
//     // res.status(404).json({ message: `no product for this id ${id}` });
//     return next(new ApiError(`no product for this id ${id}`, 404));
//   }
//   res.status(204).send();
//   //  res .status(200)
//   // .json({ data: category, msg: "category deleted successfully" });
// });
