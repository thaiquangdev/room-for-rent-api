import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1748970088469 implements MigrationInterface {
    name = 'CreateTable1748970088469'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`posts\` (\`id\` varchar(36) NOT NULL, \`post_name\` varchar(255) NOT NULL, \`post_slug\` varchar(255) NOT NULL, \`category\` varchar(255) NOT NULL, \`conscious\` varchar(255) NOT NULL, \`district\` varchar(255) NOT NULL, \`ward\` varchar(255) NOT NULL, \`road\` varchar(255) NOT NULL, \`hourseNumber\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`price_unit\` varchar(255) NOT NULL, \`area\` int NOT NULL, \`videoUrl\` varchar(255) NULL, \`videoType\` varchar(255) NULL, \`expiredAt\` datetime NULL, \`isApprove\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`full_name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`email_verify\` tinyint NOT NULL DEFAULT 0, \`avatar\` varchar(255) NULL, \`role\` enum ('admin', 'search', 'broker') NOT NULL, \`refresh_token\` text NULL, \`otp\` varchar(255) NULL, \`otp_expired\` datetime NULL, \`passwordResetToken\` varchar(255) NULL, \`passwordResetExpire\` datetime NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`post_highlights\` (\`post_id\` varchar(36) NOT NULL, \`highlight_id\` varchar(36) NOT NULL, INDEX \`IDX_5c7f1a57a1f632131783ed0fca\` (\`post_id\`), INDEX \`IDX_030be93807076bb65b1a30740e\` (\`highlight_id\`), PRIMARY KEY (\`post_id\`, \`highlight_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`post-images\` ADD CONSTRAINT \`FK_578c575bae8e2630924320525a4\` FOREIGN KEY (\`postId\`) REFERENCES \`posts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_ae05faaa55c866130abef6e1fee\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`post_highlights\` ADD CONSTRAINT \`FK_5c7f1a57a1f632131783ed0fca3\` FOREIGN KEY (\`post_id\`) REFERENCES \`posts\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`post_highlights\` ADD CONSTRAINT \`FK_030be93807076bb65b1a30740e3\` FOREIGN KEY (\`highlight_id\`) REFERENCES \`highlights\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post_highlights\` DROP FOREIGN KEY \`FK_030be93807076bb65b1a30740e3\``);
        await queryRunner.query(`ALTER TABLE \`post_highlights\` DROP FOREIGN KEY \`FK_5c7f1a57a1f632131783ed0fca3\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_ae05faaa55c866130abef6e1fee\``);
        await queryRunner.query(`ALTER TABLE \`post-images\` DROP FOREIGN KEY \`FK_578c575bae8e2630924320525a4\``);
        await queryRunner.query(`DROP INDEX \`IDX_030be93807076bb65b1a30740e\` ON \`post_highlights\``);
        await queryRunner.query(`DROP INDEX \`IDX_5c7f1a57a1f632131783ed0fca\` ON \`post_highlights\``);
        await queryRunner.query(`DROP TABLE \`post_highlights\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`posts\``);
    }

}
