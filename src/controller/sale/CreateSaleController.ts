import { Request, Response } from "express";
import { CreateSaleService } from "../../service/sale/CreateSaleService";

class CreateSaleController {
    async handle(request: Request, response: Response){
        const {userId, productId, clientId, quantity} = request.body;
        const sale = {
            userId:userId,
            productId:productId,
            clientId:clientId,
            quantity:quantity
        };
        const createsaleService = new CreateSaleService();
        const ret = await createsaleService.execute(sale);
        return response.json(ret);
    }
}

export {CreateSaleController};