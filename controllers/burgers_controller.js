const burger = require("../models/burger");
const express = require("express");
const app = express();

var bur = function(app) {
  app.post("/api/burgers", function(req, res) {
    console.log(burger);
    burger
      .create(req.body.name, 0)
      .then(function(data) {
        res.json({ id: data.insertId });
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  app.put("/api/burgers/:id", function(req, res) {
    let devoured = req.body.devoured == "true";
    burger
      .update(devoured, req.params.id)
      .then(function(data) {
        if (data.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
        location.reload();
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  app.get("/", function(req, res) {
    burger
      .all()
      .then(function(data) {
        console.log(data);
        res.render("index", { burgers: data });
      })
      .catch(function(err) {
        console.log(err);
      });
  });
};

module.exports = bur;
