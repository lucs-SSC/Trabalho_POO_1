import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Providers1636479957572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'providers',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'provider',
                        type: 'varchar',
                    },
                    {
                        name:'email',
                        type: 'varchar',
                    },
                    {
                        name:'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name:'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('providers')
    }

}
