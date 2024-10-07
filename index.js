const express = require("express");
const flightsRouters = require("./routers/flightsRouters");
const { isBaseRoute } = require("./midelleweres/pathCheck");

// create port and app
const port = 8080;
const app = express();

// create route for base url, with middlewere that return an error when the base router is reached.
app.use("/api/flights", isBaseRoute, flightsRouters);

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});
