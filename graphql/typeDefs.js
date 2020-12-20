const { gql } = require("apollo-server");

module.exports = gql`
    type PLL {
        id: ID!
        name: String!
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
    }
    input RegisterInput {
        username: String!
        email: String!
        password: String!
        confirmPassword: String!
    }

    type Mutation {
        register(registerInput: RegisterInput): User
    }
`;
