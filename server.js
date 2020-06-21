const next = require("next");
const express = require("express");
const compression = require("compression");

// Connect to mongodb

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const expressApp = express();

  // Init Middleware Body Parser which is now included in express
  expressApp.use(express.json({ extended: false }));

  if (!dev) {
    expressApp.use(compression());
  }
  var http = require("http").createServer(expressApp);
  const server = http;

  // Define Routes

  expressApp.use("/api/email", require("./routes/api/email"));

  expressApp.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server started on port ${PORT} `);
  });
});
