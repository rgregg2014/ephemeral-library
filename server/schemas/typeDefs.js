const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
    bookByTitle(title: String!): Book
    booksByAuthor(author: String!): [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
    deleteBook(title: String!): Book
  }
`;

module.exports = typeDefs;
