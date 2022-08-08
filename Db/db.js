const mongoose = require("mongoose");

function connectDb() {
  mongoose.connect("mongodb+srv://Vaishnavi:vaish123@cluster0.nux9o.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("connection successfull");
  });
  connection.on("error", () => {
    console.log("connection failed");
  });
}

connectDb();
module.exports = mongoose;
