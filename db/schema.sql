CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id AUTO INCREMENT,
    name VARCHAR (30),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id) 
);

