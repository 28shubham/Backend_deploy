//Requiring Modules
const express = require("express");

const cors = require("cors");
const db = require("./config/mongoose");
const passport = require("passport");
const passport_jwt = require("./config/passport-jwt");

const app = express();
const port = process.env.PORT || 8000;
//Using Middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
    limit: "50mb",
  })
);
app.get("/", (req, res) => {
  res.send("Hello, World!"); // or any response you want
});
app.use(passport.initialize());

//diverging request to routes
const routes = require("./routes");
app.use("/", routes);

//Listning to server
app.listen(port, (err) => {
  if (err) {
    console.log("err");
  }
  console.log("Express Server Running on port ", port);
});
