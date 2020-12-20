const PLL = require("../../models/PLL");

module.exports = {
    Query: {
        async getPLLs() {
            try {
                const plls = await PLL.find();
                return plls;
            } catch (err) {
                throw new Error(err);
            }
        },
    },
};
