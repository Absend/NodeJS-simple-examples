"use strict";

let mongoose = require("mongoose");

module.exports.init = function() {
    let materialSchema = mongoose.Schema({
        title: { type: String, required: true },
        description: { type: String, required: true },
        image: {type: String },
        date: { type: Date, default: Date.now }
    });

    let Material = mongoose.model("Material", materialSchema);
};