const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const bookController = require('../controller/bookController')
const reviewController = require("../controller/reviewController")
const auth = require("../middlewares/auth")



// dummy 
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// ------------ Creating user ------------------------
router.post("/register",userController.registerUser )

// ------------ login for user ----------------------
router.post("/login", userController.userLogin)

// ----------- creating book ------------------------
router.post("/books", bookController.createBook)

// ------------ get book by query filters ------------
router.get("/books", bookController.getAllBooks)

// ------------ get books by BookId ------------------
router.get("/books/:bookId", bookController.bookById)

// ------------ update book by BookId -------------------------
router.put("/books/:bookId", bookController.updateBook)

// ------------- delete by BookId -------------------
router.delete("/books/:bookId", bookController.deleteBookById)

// ------------ creating review -----------------------------
router.post("/books/:bookId/review",reviewController.createReview )

// ------------ updating review -----------------------------
router.put("/books/:bookId/review/:reviewId",reviewController.updateReview)


module.exports = router