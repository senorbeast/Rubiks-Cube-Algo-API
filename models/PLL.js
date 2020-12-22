const { model, Schema } = require("mongoose");

const PLLSchema = new Schema({
    nameAlg: String,
    recogn: String,
    scrambles: [
        {
            scramble: String,
        },
    ],
    alglist: [
        {
            //alginfo
            alg: String,
            rating: [
                {
                    //like
                    createdAt: String,
                    username: String,
                },
            ],
        },
    ],
});

module.exports = model("PLL", PLLSchema);
