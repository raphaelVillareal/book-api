const express = require("express");
const routes = express.Router();

const {getAllBooks,getBooksByGenre} = require("../controllers/booksControllers");


routes.get("/books", getAllBooks);
routes.get("/books/genre/:genre", getBooksByGenre);

module.exports = routes;