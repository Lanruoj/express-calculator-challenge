const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({
    message: "Welcome to the Calculator API!",
  });
});

app.listen(3000, () => {
  console.log("Server started");
});
