import { Router } from "express";
import { authController } from "./auth.controller";
import validate from "../../utils/validate";
import { authValidation } from "./auth.validation";
import auth from "../../utils/auth.middleware";

const router = Router()

router.post("/login", validate(authValidation.login), authController.login)
router.get("/getme", auth(), authController.getMe)

export const AuthRouter = router