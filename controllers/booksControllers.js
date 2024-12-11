const books = require("../models/booksModel");

const getAllBooks = async (req, res) => {
    try {
      res
        .status(200)
        .json({ message: "Books retrieved successfully",Data:books });
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  };

  const getBooksByGenre = async (req, res) => {
    try {
      const genre = req.params.genre;
      const book = books.filter((book) => book.genre ===genre );
      if (book.length>0) {
        res
          .status(200)
          .json({ message: "Book retrieved successfully", data: book });
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  };


module.exports = {getAllBooks,getBooksByGenre};