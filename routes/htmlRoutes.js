// Dependencies
const path = require("path");

//routes

module.exports = function (app) {
  // User will see the appropirate html files using the routes

  app.get("/notes", function (request, response) {
    response.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function (request, response) {
    response.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
