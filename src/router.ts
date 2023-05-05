import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";

export const router = Router();

// List categories
router.get("/categories", listCategories);

// Create categories
router.post("/categories", (req, res) => {
  res.send("OK");
});

// List Products
router.get("/products", (req, res) => {
  res.send("OK");
});

// Create Products
router.post("/products", (req, res) => {
  res.send("OK");
});

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
