// @des rules

const { check } = require("express-validator");
const validatormiddelware = require("../../middlewares/validatormiddelware");

exports.GetbrandValidator = [
  check("id").isMongoId("").withMessage("invalid brand id format"),
  validatormiddelware,
];

exports.UpdatebrandValidator = [
  check("id").isMongoId("").withMessage("invalid brand id format"),
  validatormiddelware,
];

exports.DeletebrandValidator = [
  check("id").isMongoId("").withMessage("invalid brand id format"),
  validatormiddelware,
];

exports.CreatbrandValidator = [
  check("name")
    .notEmpty()
    .withMessage("name required")
    .isLength({ min: 3 })
    .withMessage("Too short brand name")
    .isLength({ max: 20 })
    .withMessage("Too long brand name"),
  validatormiddelware,
];
