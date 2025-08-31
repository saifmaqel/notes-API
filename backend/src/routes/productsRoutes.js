import express from "express";
import {
  getProducts,
  updateProduct,
  createProduct,
  deleteProduct,
} from "../controllers/productsController.js";

const router = express.Router(); // /api/products

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/", updateProduct);
router.delete("/", deleteProduct);

export default router;
