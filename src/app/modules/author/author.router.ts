import { Router } from "express";
import { AuthorController } from "./author.controller";
import validate from "../../utils/validate";
import { AuthorValidation } from "./author.validation";

const router = Router()


router.post("/authors", validate(AuthorValidation.create), AuthorController.createAuthor)
router.get("/authors", AuthorController.getAllAuthors)
router.get("/authors/:id", AuthorController.getAuthorById)
router.put("/authors/:id", validate(AuthorValidation.update), AuthorController.updateAuthor)
router.delete("/authors/:id",  AuthorController.deleteAuthor)


export const AuthorRouter = router