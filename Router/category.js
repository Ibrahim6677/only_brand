const express = require("express");

const {
  creatcategory,
  getcategories,
  getcategory,
  updatecategory,
  deletecategory,
} = require("../controllers/category");
const {
  CreatcategoryValidator,
  GetCategoryValidator,
  UpdateCategoryValidator,
  DeleteCategoryValidator,
} = require("../utils/validators/Categoryvalidator");
// Nasted route for subcategories
const router = express.Router();
const subCategoryRoute = require("./subCategoryRoute");

router.use("/:categoryid/subcategories", subCategoryRoute);
router
  .route("/")
  .post(CreatcategoryValidator, creatcategory)
  .get(getcategories);
router
  .route("/:id")
  .get(GetCategoryValidator, getcategory)
  .put(UpdateCategoryValidator, updatecategory)
  .delete(DeleteCategoryValidator, deletecategory);
module.exports = router;
