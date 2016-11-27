"use strict";

let controller = require("../controller/controller");

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.redirect("/home");
    });

    app.get("/home", controller.home);

    app.post("/materials", controller.postMaterial);

    app.get("/add-material", controller.addForm);

    app.get("*", (req, res) => {
        res.redirect("/home");
    });
};