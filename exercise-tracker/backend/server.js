const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const exerciseRoute = require("./routes/exercise");
const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/exercises", exerciseRoute);
app.use("/users", userRoute);

const dbUrl = process.env.URL;
mongoose.connect(dbUrl, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to Mongo Db Atlas cloud database");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is listening on  " + `${port}`);
});
