import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategories } from "./app/useCases/categories/createCategories";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProducts } from "./app/useCases/products/createProducts";
import multer from "multer";
import path from "node:path";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get("/categories", listCategories);

// Create categories
router.post("/categories", createCategories);

// List Products
router.get("/products", listProducts);

// Create Products
router.post("/products", upload.single('image'), createProducts);

// Get products by category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("OK");
});

// List Orders
router.get("/orders", (req, res) => {
  res.send("OK");
});

// Create Orders
router.post("/orders", (req, res) => {
  res.send("OK");
});

// Change order status
router.patch("/orders/:orderId", (req, res) => {
  res.send("OK");
});

// Delete/Cancel orders
router.delete("/orders:orderId", (req, res) => {
  res.send("OK");
});
