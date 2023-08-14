import { Order } from './../../models/Order';
import {Request, Response} from 'express';

export async function changeOrderStatus(req: Request,res: Response){
  try{
    const {orderId} = req.params;
    const { status } = req.body;

    if(!['WAITING','IN_PROGRESS','DONE'].includes(status)){
      res.status(400).json({
        error: 'Status should be one of these: WAITING, IN_PROGRESS, DONE.'
      });
    }

    await Order.findByIdAndUpdate(orderId, {status});
    res.sendStatus(204);
  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }
}
