const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Requiring our models for syncing
var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
