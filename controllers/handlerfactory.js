const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");


exports.deleteone = (model) =>
    asyncHandler(async (req, res, next) => {
        const { id } = req.params;
        const document = await model.findByIdAndDelete({ _id: id });
        if (!document) {
          return next(new ApiError(`no document for this id ${id}`, 404));
        }
        res.status(204).json({});
      });
      