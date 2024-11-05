const gloabalerror = (err, req, res, next) => {
  // console.error(err.stack)
  // err.statuscode = err.statuscode || 500;
  // err.status = err.status || "fail";
  if (process.env.NODE_ENV === "development") {
    sendErrorForDevellopment(err, res);
  } else {
    sendErrorForProduction(err, res);
  }
};

const sendErrorForDevellopment = (err, res) => {
  return res.status(err.statuscode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorForProduction = (err, res) => {
  return res.status(err.statuscode).json({
    status: err.status,
    message: err.message,
  });
};

module.exports = gloabalerror;
