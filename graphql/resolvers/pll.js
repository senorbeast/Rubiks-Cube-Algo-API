const { UserInputError } = require("apollo-server");
const PLL = require("../../models/PLL");
const checkAuth = require("../../utils/check-auth");
module.exports = {
    Query: {
        async getPLLs() {
            try {
                const pll = await PLL.find();
                return pll;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getPLL(_, { pllId }) {
            try {
                const pll = await PLL.findById(pllId);
                if (pll) {
                    return pll;
                } else {
                    throw new Error("PLL not found");
                }
            } catch (err) {
                throw new Error(err);
            }
        },
    },
    Mutation: {
        async addPLL(_, { nameAlg, recogn }, context) {
            const user = checkAuth(context);
            const algN = await PLL.findOne({ nameAlg });
            if (algN) {
                throw new UserInputError("Algorithm Case already exist", {
                    errors: {
                        nameAlg: "Algorithm Case already exist",
                    },
                });
            }
            //Following code will run only if no Errors are thrown (i.e User is authenticated)
            const newPLL = new PLL({ nameAlg, recogn });
            const pll = await newPLL.save();
            return pll;
        },
        addAlg: async (_, { pllId, alg }, context) => {
            const user = checkAuth(context);
            if (alg.trim() === "") {
                throw new UserInputError("Algorithm field empty", {
                    errors: {
                        alg: "Algorithm must not be empty",
                    },
                });
            }
            const algf = await PLL.findOne({ "alglist.alg": alg });
            if (algf) {
                throw new UserInputError("Algorithm already exist", {
                    errors: {
                        alg: "Algorithm already exist",
                    },
                });
            }

            const pll = await PLL.findById(pllId);
            if (pll) {
                pll.alglist.unshift({
                    alg,
                });
                await pll.save();
                return pll;
            } else throw new UserInputError("PLL not found");
        },
    },
};
