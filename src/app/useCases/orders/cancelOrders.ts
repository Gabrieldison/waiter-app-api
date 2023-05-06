import { Request, Response } from "express";
import { Orders } from "../../models/Order";

export async function cancelOrders(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    await Orders.findByIdAndDelete(orderId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
