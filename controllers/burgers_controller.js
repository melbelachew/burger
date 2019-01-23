const burger = require("../models/burger");
const express = require("express");
const app = express();

var bur = function(app) {
  app.post("/api/burgers", function(req, res) {
    burger
      .create(req.body.name, req.body.devoured)
      .then(function(data) {
        res.json({ id: data.insertId });
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  app.put("/api/burgers/:id", function(req, res) {
    let devoured = req.body.devoured == "false";
    burger
      .update(devoured, req.params.id)
      .then(function(data) {
        if (data.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  app.get("/", function(req, res) {
    burger
      .all()
      .then(function(data) {
        res.render("index", { burgers: data });
      })
      .catch(function(err) {
        console.log(err);
      });
  });
};

module.exports = bur;
