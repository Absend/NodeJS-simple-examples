"use strict";

let data = require("../data/data")

module.exports = {
    postMaterial: (req, res) => {
        let newMaterial = req.body;

        data.createMaterial(newMaterial, (err, material) => {
            if (err) {
                console.log('Failed to add new material: ' + err);
                return res.send({ reason: err.toString() });
            }
            res.redirect("/home");
            console.log("Added!");
        });
    },
    home: (req, res) => {
        data.getAllMaterials()
            .then((materials, err) => {
                if (err) {
                    console.log("Failed to add new material: " + err);
                    return;
                }

                res.render("home", { materials })
            });
    },
    addForm: (req, res) => {
        res.render("add");
    }
}
