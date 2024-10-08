const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sthawait1:TyepLYhPG62tSU4i@cluster0.wwlsh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Error in Database : ", err.message);
});

db.once("open", () => {
  console.log("Successfully connected to DB");
});

module.exports = db;
