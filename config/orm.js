const connection = require("./connection");

function ORM(table) {
  this.table = table;

  this.all = function() {
    const sql = `SELECT * FROM ??`;

    return new Promise(function(resolve, reject) {
      connection.query(sql, table, function(err, data) {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(data);
      });
    });
  };

  this.create = function(name, devoured) {
    const sql = `INSERT INTO ?? (name, devoured) VALUE (?, ?)`;

    return new Promise(function(resolve, reject) {
      connection.query(sql, [table, name, devoured], function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    });
  };

  this.update = function(devoured, id) {
    const sql = `UPDATE ?? SET devoured = ? WHERE id = ?`;

    return new Promise(function(resolve, reject) {
      connection.query(sql, [table, devoured, id], function(err, data) {
        if (err) reject(err);
      });
    });
  };
}
module.exports = ORM;
