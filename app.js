const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const { promisify } = require("util");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use(cors());

// const homePage = fs.readFileSync(`${__dirname}/views/index.html`);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.post("/saveData", async (req, res) => {
  const data = JSON.stringify(req.body);

  await promisify(fs.writeFile)(path.join(__dirname, "data.json"), data);

  res.status(201).json({ status: "success" });
});

app.get("/getJson", async (_, res) => {
  let jsonData = await promisify(fs.readFile)(
    path.join(__dirname, "data.json"),
    "utf-8"
  );

  jsonData = JSON.parse(jsonData);

  res.status(200).json({ Bot: { bot_data: jsonData } });
});

app.get("/downloadJson", (_, res) => {
  res.download(`${__dirname}/data.json`, "data.json");
});

app.listen(4000, "127.0.0.1", () => {
  console.log("server is running on port 4000");
});
