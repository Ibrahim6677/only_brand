// package / modules
const express = require("express");
const mongoose = require("mongoose");
const UserRoute = require("./Router/user");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const morgan = require("morgan");
const CategoryRoute = require("./Router/category");
const ApiError = require("./utils/ApiError");
const globalError = require("./middlewares/errorrmiddleware");
const SubCategoryRoute = require("./Router/subCategoryRoute");
const BrandsRoute = require("./Router/Brands");
const ProductRoute = require("./Router/product");
const dbconnection = require("./config/database");

// connect to DB
dbconnection();
// mongoose.connect(uri);
// mongoose.connection.on("connected", () => {
//   console.log("connected to database successfuly");
// });

// app express
const app = express();

// middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode:${process.env.NODE_ENV}`);
}
// middleware parsing
app.use(express.json());

// Mount Routes
app.use("/api/user", UserRoute);
app.use("/api/category", CategoryRoute);
app.use("/api/subcategory", SubCategoryRoute);
app.use("/api/brand", BrandsRoute);
app.use("/api/product", ProductRoute);

// Creat Error
// creat error for route if route isn't correct
app.all("*", (req, res, next) => {
  //creat error and send it to error handling middleware
  // const err = new Error(`can't found this route ${req.originalUrl}`)
  next(new ApiError(`can't found this route: ${req.originalUrl}`, 400));
});

// global error handling middleware in express, only
app.use(globalError);

// mongoose.connection.on("error", (err) => {
//   console.log(err);
// });

//port
const port = process.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});

// Handle error outside express
// listen => Eevent/NOde.js => callback function(err)
process.on("unhandledRejection", (err) => {
  console.error(`unhandledrRejectionError :${err.name} |${err.message}`);
  server.close(() => {
    // stop/shutdown to the application
    console.error(`unhandledRejectionError :${err.name} |${err.message}`, err);(`shuting down`);
    process.exit(1);
  });
});
