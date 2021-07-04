const express = require("express");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

const homePage = fs.readFileSync(`${__dirname}/views/index.html`);

app.get("/", (req, res) => {
  res.end(homePage);
});

app.post("/saveData", async (req, res) => {
  const data = JSON.stringify(req.body);

  await promisify(fs.writeFile)(path.join(__dirname, "data.json"), data);

  res.status(201).json({ status: "success" });
});

app.get("/getJson", (_, res) => {
  res.download(`${__dirname}/data.json`, "data.json");
});

app.listen(4000, "127.0.0.1", () => {
  console.log("server is running on port 4000");
});
