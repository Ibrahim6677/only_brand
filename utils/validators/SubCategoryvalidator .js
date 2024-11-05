// @des rules
// ctrl + D  to update the words
const { check } = require("express-validator");
const validatormiddelware = require("../../middlewares/validatormiddelware");

exports.GetsubCategoryValidator = [
  check("id").isMongoId("").withMessage("invalid subcategory id format"),
  validatormiddelware,
];

exports.UpdatesubCategoryValidator = [
  check("id").isMongoId("").withMessage("invalid subcategory id format"),
  check("name").not().isEmpty().withMessage("subcategory name is required"),
  validatormiddelware,
];

exports.DeletesubCategoryValidator = [
  check("id").isMongoId("").withMessage("invalid subcategory id format"),
  validatormiddelware,
];

exports.CreatsubcategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("name required")
    .isLength({ min: 2 })
    .withMessage("Too short subcategory name")
    .isLength({ max: 20 })
    .withMessage("Too long subcategory name"),
  check("category")
    .notEmpty()
    .withMessage("subcategoy must be belong to categoty")
    .isMongoId()
    .withMessage("invalid category id format"),
  validatormiddelware,
];
