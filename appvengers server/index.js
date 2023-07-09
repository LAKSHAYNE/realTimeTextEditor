require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
mongoose.connect(
  "mongodb+srv://" +
    process.env.DBUSERNAME +
    ":" +
    process.env.DBPASSWORD +
    "@cluster0.siopf.mongodb.net/" +
    process.env.DBNAME +
    "?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const contentSchema = mongoose.Schema({
  content: String,
});
const contentS = mongoose.model("content", contentSchema);
app.get("/", (req, res) => res.send("hello"));
app.put("/data", async (req, res) => {
  console.log(req.body);
  const updatedata = await contentS.findByIdAndUpdate(
    { _id: "64aab482ff68d33d1340e861" },
    { content: req.body.content }
  );
  res.sendStatus(200);
});
app.get("/data", async (req, res) => {
  const data = await contentS.find();
  res.send(data);
});
app.listen(8000, () => console.log("Server is Running on 8000"));
