import { Request, Response } from 'express'
import { PurchaseOrdersServices } from '../services/PurchaseOrdersServices'

class PurchaseOrdersController {

    async create(request: Request, response: Response) {
        let { provider_id, product_id, amount, unityValue, dateOrder } = request.body
        const purchaseOrdersServices = new PurchaseOrdersServices()
        
        dateOrder = new Date(dateOrder)

        try {
        const providersOrders = await providersOrdersServices.create({ provider_id, product_id, amount, unityValue, dateOrder})

        return response
                    .status(200)
                    .json(providersOrders)

        } catch(err:any) {
            return response
                    .status(400)
                    .json({message: err.message})
        }
        
    }

    async index (request: Request, response: Response) {
        const purchaseOrdersServices = new PurchaseOrdersServices();

        try {
            const providersOrders = await providersOrdersServices.index();
            return response
                        .json(providersOrders)

        } catch(err) {
            return response
                        .status(400)
                        .json({message: err.message})
        }
    }

    async show(request: Request, response: Response) {
        const purchaseOrdersServices = new PurchaseOrdersServices();
        const { id } = request.params;
        try {
            const providersOrders = await providersOrdersServices.show({ id });
            return response
                        .json(providersOrders)

        } catch(err) {
            return response
                        .status(400)
                        .json({message: err.message})
        }
    }

    async delete(request: Request, response: Response) {
        const purchaseOrdersServices = new PurchaseOrdersServices();
        const { id } = request.params;

        try {
            await purchaseOrdersServices.delete({id});

            return response
                        .status(200)
                        .json({message: "Venda excluida com sucesso !"})
        } catch(err) {
            return response
                        .status(400)
                        .json({message: err.message})
        }
    }

    async update(request: Request, response: Response) {
        let { provider_id, product_id, amount, unityValue, dateOrder } = request.body;
        const { id } = request.params;
        const purchaseOrdersServices = new PurchaseOrdersServices();

        dateOrder = new Date(dateOrder)

        try {
            const providersOrders = await purchaseOrdersServices.update({ id, provider_id, product_id, amount, unityValue, dateOrder });

            return response
                        .json(providersOrders);
        } catch(err) {
            return response.status(400).json({message: err.message})
        }
    }
}

export { SuppliersOrdersController }