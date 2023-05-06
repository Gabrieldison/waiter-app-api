import { Request, Response } from "express";
import { Orders } from "../../models/Order";

export async function createOrders(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    console.log({
      table,
      products,
    });

    const order = await Orders.create({
      table,
      products,
    });

    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
