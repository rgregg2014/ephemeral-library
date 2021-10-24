const { Book } = require("../models");

const resolvers = {
  Query: {
    //   return all books in database
    books: async () => {
      return await Book.find();
    },
    // find a book by title
    bookByTitle: async (__, { title }) => {
      return await Book.findOne({ title: title });
    },
    // find a list of books by author
    booksByAuthor: async (__, { author }) => {
      return await Book.find({ author: author });
    },
  },
  Mutation: {
    //   add a book
    addBook: async (__, { title, author }) => {
      const newBook = Book.create({
        title,
        author,
      });
      return newBook;
    },
  },
};

module.exports = resolvers;
