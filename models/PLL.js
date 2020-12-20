const { model, Schema } = require("mongoose");

const PLLSchema = new Schema({
    name: String,
    alglist: [
        {
            alg: String,
            rating: Number,
            recogn: String,
        },
    ],
});

module.exports = model("PLL", PLLSchema);
