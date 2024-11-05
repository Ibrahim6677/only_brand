const mongoose = require("mongoose");

const Schemaa = mongoose.Schema;

const categorySchema = new Schemaa(
  {
    name: {
      type: String,
      required: [true, "Category required"],
      unique: [true, "Category must be uniqe"],
      minlength: [3, "Too short category name"],
      maxlength: [20, "Too long category name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    image: String,
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
