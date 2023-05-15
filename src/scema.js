const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        name: String,
        age: Number,
    }, {
        capped: { size: 1024 },
        // bufferCommands: false,
        // autoCreate: false // disable `autoCreate` since `bufferCommands` is false

    })
    // Exportation de notre module nous permettant de definir les chemin d'accès
module.exports = mongoose.model("User", userSchema);