const express = require("express");
const { usersRouter } = require("./user-router");

const app = express();

function loggerMiddlewera(req, res, next) {
  console.log(`[${req.method}] - ${req.url}`);
  next();
}

app.use(loggerMiddlewera);

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.statusCode = 418;
  res.setHeader("X-Custom-Header", "skillfactory");
  res.send("I have received your GET request");
});

function authMiddleware(req, res, next) {
  if (req.headers["authorization"] !== undefined) {
    next();
  } else {
    res.statusCode = 401;
    res.send("Error! You have need to authorize");
  }
}

app.post("/", authMiddleware, (req, res) => {
  console.log(req.url);
  console.log(req.headers);
  res.send("I have received your POST request");
});

app.put("/", (req, res) => {
  res.send("I have received your PUT request");
});

app.delete("/", (req, res) => {
  res.send("I have received your DELETE request");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
