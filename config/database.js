// connection to datebase
const mongoose = require("mongoose");

const uri = "mongodb+srv://mahmoudyou144:123@mahmoud1.cfqy0.mongodb.net/?retryWrites=true&w=majority&appName=Mahmoud1"
const dbconnection = () => {
  mongoose
      .connect(uri)
      .then((conn) => {
        console.log(`Database Connected: ${conn.connection.host}`);
      })};

module.exports=dbconnection;