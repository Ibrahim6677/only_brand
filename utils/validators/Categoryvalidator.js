// @des rules

const { check } = require("express-validator");
const validatormiddelware = require("../../middlewares/validatormiddelware");

exports.CreatcategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("name required")
    .isLength({ min: 3 })
    .withMessage("Too short category name")
    .isLength({ max: 20 })
    .withMessage("Too long category name"),
  validatormiddelware,
];

exports.GetCategoryValidator = [
  check("id").isMongoId("").withMessage("invalid category id format"),
  validatormiddelware,
];

exports.UpdateCategoryValidator = [
  check("id").isMongoId("").withMessage("invalid category id format"),
  validatormiddelware,
];

exports.DeleteCategoryValidator = [
  check("id").isMongoId("").withMessage("invalid category id format"),
  validatormiddelware,
];
