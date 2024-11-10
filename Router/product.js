const express = require("express");

const {
  creatProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const {
  CreatProductValidator,
  GetProductValidator,
  UpdateProductValidator,
  DeleteProductValidator,
} = require("../utils/validators/Productvalidator");

const router = express.Router();

router.route("/").post(CreatProductValidator, creatProduct).get(getProducts);
router
  .route("/:id")
  .get(GetProductValidator, getProduct)
  .put(UpdateProductValidator, updateProduct)
  .delete(DeleteProductValidator, deleteProduct);
module.exports = router;
