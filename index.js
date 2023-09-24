const express = require("express");
const Users = require("./routes/users");
const app = express();
const port = process.env.port || 8000;

app.use(express.json());

app.use("/users", Users);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express</h1>");
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
