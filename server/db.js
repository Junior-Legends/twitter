const mongoose = require("mongoose");
exports.connectDB = async () => {
  try {
    const DB = process.env.DB;
    await mongoose
      .connect(DB, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Successfully connected to the database"));
  } catch (error) {
    console.log(error);
  }
};
