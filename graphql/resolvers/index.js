const userResolvers = require("./users");
const pllResolvers = require("./pll");

module.exports = {
    Query: {
        ...pllResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
    },
};
