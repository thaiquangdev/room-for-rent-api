import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTable1749026899494 implements MigrationInterface {
    name = 'UpdateTable1749026899494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`description\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`description\` varchar(255) NOT NULL`);
    }

}
