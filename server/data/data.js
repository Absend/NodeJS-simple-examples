"use strict";

let Material = require("mongoose").model("Material");

module.exports = {
    getAllMaterials() {
        return new Promise((resolve, reject) => {
            Material.find((err, materials) => {
                if (err) {
                    return reject(err);
                }

                return resolve(materials);
            });
        });
    },
    getMaterialById(id) {
        return new Promise((resolve, reject) => {
            Material.findOne({ _id: id }, (err, material) => {
                if (err) {
                    return reject(err);
                }

                return resolve(material);
            });
        });
    },
    createMaterial(newMaterial, callback) {
        Material.create(newMaterial, callback);
    }
}