import {MigrationInterface, QueryRunner} from "typeorm";

export class yourMigrationName1703049015284 implements MigrationInterface {
    name = 'yourMigrationName1703049015284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" varchar PRIMARY KEY NOT NULL, "username" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "user_role" text NOT NULL, "date" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "username", "email", "password", "user_role", "date") SELECT "id", "username", "email", "password", "user_role", "date" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "username" text NOT NULL, "email" text, "password" text, "user_role" varchar, "date" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
        await queryRunner.query(`INSERT INTO "user"("id", "username", "email", "password", "user_role", "date") SELECT "id", "username", "email", "password", "user_role", "date" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
    }

}
