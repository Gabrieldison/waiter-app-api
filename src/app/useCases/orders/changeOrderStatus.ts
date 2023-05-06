import { Request, Response } from "express";
import { Orders } from "../../models/Order";

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { status } = req.body;
    const { orderId } = req.params;

    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
      return res.status(400).json({
        error: "Status should be one of these: WAITING, IN_PRODUCTION, DONE",
      });
    }

    await Orders.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);

    console.log({
      status,
      orderId,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
