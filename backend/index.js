const express = require('express')
const app = express();

const path = require("path");
const { default: mongoose } = require("mongoose");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const env = process.env.NODE_ENV || "DEVELOPMENT";

require("dotenv").config();
app.use(bodyParser.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database CONNECTED");
  })
  .catch((err) => {
    console.log("Database ERROR", err);
  });

// app.use(cors());

if (env === "DEVELOPMENT") {
  console.log('Running in development mode');
  app.use(require("./auth"));
} else {
  console.log('Running in production mode');
  app.use(`/api`, require("./auth"));
}

app.use(require("./auth"));

app.use(express.static(path.resolve(__dirname,"..", "frontend", "docs")));

app.get("/", (req, res) => {
  // console.log(path.resolve(__dirname,"..", "frontend", "docs"));
  res.status(200).sendFile(path.resolve(__dirname,"..", "frontend", "docs"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + ".." + "/frontend/docs/index.html"));
});

app.listen(PORT, () => {
  console.log("Server Connected 5000");
});

// console.log("Asfasdf")