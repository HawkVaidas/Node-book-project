
import express from "express";

import {INSERT_BOOK, GET_BOOK, GET_USER_BOOK, GET_USER_BOOK_BY_ID, DELETE_BOOK_BY_ID,}
from "../controller/book.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/books", auth, INSERT_BOOK);
router.get("/books", GET_BOOK);
router.get("/books/user/:userId", GET_USER_BOOK);
router.get("/books/:id", GET_USER_BOOK_BY_ID);
router.delete("/books/:id", DELETE_BOOK_BY_ID);


export default router;
