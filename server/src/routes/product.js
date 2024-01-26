import ProductController from "../controllers/products.js";
import { Router } from "express";
import asyncHandler from "../middlewares/asyncHandler.js";
import upload from "../middlewares/multerMiddleware.js";

const router = Router();

router.post(
  "/",
  upload.single("image"),
  asyncHandler(ProductController.createNewProduct)
);
router.get("/", asyncHandler(ProductController.getAllProducts));
router.get("/:id", asyncHandler(ProductController.getProduct));
router.patch(
  "/:id",
  upload.single("image"),
  asyncHandler(ProductController.updateProduct)
);
router.delete("/:id", asyncHandler(ProductController.deleteProduct));

export default router;
