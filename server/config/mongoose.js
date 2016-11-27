let mongoose = require("mongoose")
    Material = require("../data/models/Material");

module.exports = function(params) {
    mongoose.connect(params.db);
    let db = mongoose.connection;

    db.on("error", function(err){
        console.log("Database error: " + err);
    });

    db.once("open", function(err) {
        if (err) {
            console.log("Database could not be opened: " + err);
            return;
        }

        console.log("Database up and running...")
    });

    Material.init();
};