import {
    Column,
    CreateDateColumn,
    Entity, PrimaryColumn, UpdateDateColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('purchaseOrders')

class PurchaseOrder {

    @PrimaryColumn()
    id: string;
    
    @JoinColumn({name: 'provider_id'})
    @ManyToOne(() => Provider )
    provider: Supplier;

    @Column()
    provider_id: string;

    @JoinColumn({name: 'product_id'})
    @ManyToOne(() => Product )
    product: Product;

    @Column()
    product_id: string;

    @Column()
    amount: number;

    @Column()
    unityValue: number;

    @Column()
    purchaseDate: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {

        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { PurchaseOrder }