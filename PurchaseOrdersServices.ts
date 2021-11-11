import { getCustomRepository } from 'typeorm';
import { PurchaseOrdersRepository } from '../repositories/PurchaseOrdersRepository';
import { PurchaseOrders } from '../entities/SuppliersOrders'

interface ICreatePurchaseOrders {
    provider_id: string;
    product_id: string;
    amount: number;
    unityValue: number;
    purchaseDate: Date;
}

interface IPurchaseOrdersID{
    id: string;
}

interface IPurchaseOrdersUpdate{
    id: string;
    provider_id: string;
    product_id: string;
    amount: number;
    unityValue: number;
    dateOrder: Date;
}

class PurchaseOrdersServices {

    async create({provider_id, product_id, amount, uniratyValue, dateOrder}: ICreateSuppliersOrders){
        const PurchaseOrdersServicesRepository = getCustomRepository(PurchaseOrdersRepository);

        const purchaseOrders = purchaseOrdersServicesRepository.create({
            provider_id,
            product_id,
            amount,
            unityValue,
            dateOrder,
        })

        await PurchaseOrdersServicesRepository.save(PurchaseOrders)

        return purchaseOrders
    }

    async index() {

        const purchaseOrdersRepository = getCustomRepository(PurchaseOrdersRepository);
        const purchaseOrders = await purchaseOrdersRepository.find({
            relations: ['supplier', 'product']
        });
        return purchaseOrders

    }

    async show({ id }: IPurchaseOrdersID) {

        const purchaseOrdersRepository = getCustomRepository(purchaseOrdersRepository);
        const purchaseOrders = await purchaseOrdersRepository.findOne(
            { id },
            { relations: ['provider', 'product'] })

        if(!purchaseOrders) {
            throw new Error('Pedido de venda não encontrado')
        }
        return purchaseOrders
    }

    async delete({id }: IPurchaseOrdersID) {

        const purchaseOrdersRepository = getCustomRepository(PurchaseOrdersRepository);  //Utilizado para ter acesso aos comandos da tabela, add, delete, edit, etc.

        let purchaseOrders = await purchaseOrdersRepository.findOne({ id })

        if(!purchaseOrders) {
            throw new Error('Nenhum cliente foi encontrado, insira um ID válido.')
        }

        return await purchaseOrdersRepository.delete({ id })
    }

    async update({ id, provider_id, product_id, amount, unityValue, purchaseOrders}: IPurchaseOrdersUpdate) {
        const purchaseOrdersRepository = getCustomRepository(PurchaseOrdersRepository);

        let purchaseOrders = await purchaseOrdersRepository.findOne({ id })
        
        if(!purchaseOrders) {
            throw new Error('Nenhuma venda encontrada com este ID.')
        }

        await purchaseOrdersRepository.update(id, {
            provider_id,
            product_id,
            amount,
            unityValue,
            purchaseOrder,
        })

        purchaseOrders = await purchaseOrdersRepository.findOne(
            { id },
            { relations: ['client', 'product']})

        return purchaseOrders

    }
}

export { PurchaseOrdersServices }