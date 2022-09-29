import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOferta1624747881677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ofertas",
                columns: [
                    {
                        name: "idOferta",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "fecha",
                        type: "date"
                    },
                    {
                        name: "puesto",
                        type: "varchar"
                    },
                    {
                        name: "ubicacion",
                        type: "varchar"
                    },
                    {
                        name: "requisitos",
                        type: "varchar",
                      
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ofertas");
    }

}