import { Router } from "express";
import validate from "../../utils/validate";
import { bookValidation } from "./book.validation";
import { BookController } from "./book.controller";

const router = Router()


router.post("/books", validate(bookValidation.create), BookController.createBook)
router.get("/books", BookController.getAllBooks)
router.get("/books/:id", BookController.getBookById)
router.put("/books/:id", validate(bookValidation.update), BookController.updateBook)
router.delete("/books/:id", BookController.deleteBook)



export const BookRouter = router