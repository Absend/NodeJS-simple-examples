"use strict";

let express = require("express"),
    bodyParser = require("body-parser");

module.exports = function (app, params) {

    // View Engine
    app.set("view engine", "pug");
    app.set("views", params.rootPath + "/server/views");
    
    // BodyParser Middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Set Static Resources
    app.use(express.static(params.rootPath + "/public"));
};