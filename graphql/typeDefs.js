const { gql } = require("apollo-server");

module.exports = gql`
    type PLL {
        id: ID!
        nameAlg: String!
        recogn: String!
        alglist: [alginfo!]!
    }
    type alginfo {
        id: ID!
        alg: String!
        rating: [like]
    }
    type like {
        id: ID!
        createdAt: String!
        username: String!
    }
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    type Query {
        getPLLs: [PLL]
        getPLL(pllId: ID!): PLL
    }
    input RegisterInput {
        username: String!
        email: String!
        password: String!
        confirmPassword: String!
    }

    type Mutation {
        register(registerInput: RegisterInput): User
        login(username: String!, password: String!): User!
        addPLL(nameAlg: String!, recogn: String!): PLL
        addAlg(pllId: ID!, alg: String!): PLL!
        delAlg(algId: ID!, pllId: ID!): PLL!
        likeAlg(algId: ID!): PLL!
    }
`;
