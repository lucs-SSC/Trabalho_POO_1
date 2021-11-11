import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class PurchaseOrders1636480385207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'purchaseOrders',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'product_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'provider_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'amount',
                        type: 'number'
                    },
                    {
                        name: 'unityValue',
                        type: 'number'
                    },
                    {
                        name: 'purchaseDate',
                        type: 'date'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKProduct',
                        referencedTableName: 'products',
                        referencedColumnNames: ['id'],
                        columnNames: ['product_id'],
                        onDelete: 'SET NULL', //CASCADE
                        onUpdate: 'SET NULL', //CASCADE
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('purchaseOrders')
    }

}
