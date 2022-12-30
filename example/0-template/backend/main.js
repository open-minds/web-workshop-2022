const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const myApp = express();

const PORT = process.env.PORT || 3000;

myApp.use(cors());

// HTTP Body parser
myApp.use(express.json());
//Parse URL-encoded bodies
myApp.use(express.urlencoded());

// POST "/link/new"
myApp.use("/", routes);

myApp.listen(PORT, function () {
  console.log("🚀 Server is running");
});
