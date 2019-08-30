const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

const app = express();

const port = process.env.PORT || 3000;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
