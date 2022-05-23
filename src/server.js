// require("./services/dbsqlite");
require("./services/redis").redisDB();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use("/", require("./routes"));

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is runnning");
});
