import { Router } from "express";
import AuthController from "../controllers/auth.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const router = Router();

router.post("/signup", asyncHandler(AuthController.signup));
router.post("/signin", asyncHandler(AuthController.signin));

export default router;
