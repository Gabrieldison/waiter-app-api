import { Request, Response } from "express";
import { Orders } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Orders.find()
      .sort({ createdAt: 1 })
      .populate("products.product");

    res.json(orders);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
}
