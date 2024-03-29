import { Router } from "express";
import productRoutes from "./product.js";
import authRoutes from "./auth.js";

const router = Router();

router.use("/products", productRoutes);
router.use("/auth", authRoutes);

export default router;
