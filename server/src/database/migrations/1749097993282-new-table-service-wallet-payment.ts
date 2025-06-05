import { MigrationInterface, QueryRunner } from "typeorm";

export class NewTableServiceWalletPayment1749097993282 implements MigrationInterface {
    name = 'NewTableServiceWalletPayment1749097993282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`service-prices\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`price_day\` decimal NOT NULL, \`price_week\` decimal NOT NULL, \`price_month\` decimal NOT NULL, \`price_push_post\` decimal NOT NULL, \`title_color\` varchar(255) NOT NULL, \`post_size\` varchar(255) NOT NULL, \`auto_browse\` tinyint NOT NULL, \`show_button_call\` tinyint NOT NULL, \`priority\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payments\` (\`id\` varchar(36) NOT NULL, \`payment_status\` varchar(255) ('Đang chờ', 'Thành công', 'Thất bại') NOT NULL DEFAULT 'Đang chờ', \`payment_date\` datetime NOT NULL, \`amount\` decimal NOT NULL, \`promotion\` decimal NULL, \`transaction_id\` varchar(255) NULL, \`payment_method\` varchar(255) ('vnpay', 'momo', 'zalopay') NULL, \`before_amount\` decimal NULL, \`after_amount\` decimal NULL, \`note\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` varchar(36) NULL, \`servicePriceId\` varchar(36) NULL, \`postId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`wallets\` (\`id\` varchar(36) NOT NULL, \`balance\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`payments\` ADD CONSTRAINT \`FK_d35cb3c13a18e1ea1705b2817b1\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payments\` ADD CONSTRAINT \`FK_614410b5e2066041714a9f9569d\` FOREIGN KEY (\`servicePriceId\`) REFERENCES \`service-prices\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payments\` ADD CONSTRAINT \`FK_8ee219e294e68fe0621b6721b8d\` FOREIGN KEY (\`postId\`) REFERENCES \`posts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`payments\` DROP FOREIGN KEY \`FK_8ee219e294e68fe0621b6721b8d\``);
        await queryRunner.query(`ALTER TABLE \`payments\` DROP FOREIGN KEY \`FK_614410b5e2066041714a9f9569d\``);
        await queryRunner.query(`ALTER TABLE \`payments\` DROP FOREIGN KEY \`FK_d35cb3c13a18e1ea1705b2817b1\``);
        await queryRunner.query(`DROP TABLE \`wallets\``);
        await queryRunner.query(`DROP TABLE \`payments\``);
        await queryRunner.query(`DROP TABLE \`service-prices\``);
    }

}
