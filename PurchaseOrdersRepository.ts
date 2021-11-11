import { EntityRepository, Repository } from 'typeorm'
import { PurchaseOrders } from '../entities/PurchaseOrders'

@EntityRepository(Client)
class PurchaseOrdersRepository extends Repository<PurchaseOrders> {
    
}

export { PurchaseOrdersRepository };