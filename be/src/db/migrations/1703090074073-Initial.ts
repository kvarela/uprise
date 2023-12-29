import { MigrationInterface, QueryRunner } from 'typeorm'

export class Initial1703090074073 implements MigrationInterface {
  name = 'Initial1703090074073'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "membership_type" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "forte_id" character varying NOT NULL,
                "price" integer NOT NULL,
                "description" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "num_classes_per_week" integer NOT NULL DEFAULT '-1',
                "num_styles" integer NOT NULL DEFAULT '-1',
                "max_age" integer NOT NULL DEFAULT '-1',
                CONSTRAINT "PK_5c09e5b961e10506b61cf12c9f9" PRIMARY KEY ("id")
            )
        `)
    await queryRunner.query(`
            CREATE TABLE "style" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_12a3ba7fe23b5386181ac6b0ac0" PRIMARY KEY ("id")
            )
        `)
    await queryRunner.query(`
            CREATE TABLE "class" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "level" character varying NOT NULL DEFAULT 'All',
                "gender" character varying NOT NULL DEFAULT 'mixed',
                "min_age" integer NOT NULL DEFAULT '14',
                "max_age" integer NOT NULL DEFAULT '200',
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "duration_hours" double precision NOT NULL DEFAULT '1',
                "start_hour" double precision NOT NULL,
                "day_of_week" integer NOT NULL,
                "style_id" integer,
                CONSTRAINT "UQ_0d45fb36607d76c0d286c4c0e21" UNIQUE (
                    "name",
                    "gender",
                    "style_id",
                    "level",
                    "start_hour",
                    "day_of_week"
                ),
                CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id")
            )
        `)
    await queryRunner.query(`
            CREATE TABLE "member" (
                "id" SERIAL NOT NULL,
                "name" character varying,
                "dob" TIMESTAMP,
                "gender" character varying NOT NULL DEFAULT 'male',
                "address" character varying,
                "email" character varying,
                "phone" character varying NOT NULL,
                "forte_id" character varying,
                "membership_status" character varying,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "is_staff" boolean NOT NULL DEFAULT false,
                "membership_type_id" integer,
                CONSTRAINT "UQ_d73619f5e63108e8d57e8e1859d" UNIQUE ("phone"),
                CONSTRAINT "PK_97cbbe986ce9d14ca5894fdc072" PRIMARY KEY ("id")
            )
        `)
    await queryRunner.query(`
            CREATE TABLE "check_in" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "member_id" integer,
                "class_id" integer,
                CONSTRAINT "PK_9c026e16735aea10812a3888d6c" PRIMARY KEY ("id")
            )
        `)
    await queryRunner.query(`
            CREATE TABLE "class_instructor" (
                "class_id" integer NOT NULL,
                "member_id" integer NOT NULL,
                CONSTRAINT "PK_2f50d10677dd7e6852b7fee05c0" PRIMARY KEY ("class_id", "member_id")
            )
        `)
    await queryRunner.query(`
            CREATE INDEX "IDX_92ee4d722d6f10fbd9310c8c01" ON "class_instructor" ("class_id")
        `)
    await queryRunner.query(`
            CREATE INDEX "IDX_809a772418256eb2f918fa3e3e" ON "class_instructor" ("member_id")
        `)
    await queryRunner.query(`
            ALTER TABLE "class"
            ADD CONSTRAINT "FK_e451d4224459fa17863bd1ff466" FOREIGN KEY ("style_id") REFERENCES "style"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    await queryRunner.query(`
            ALTER TABLE "member"
            ADD CONSTRAINT "FK_3053a50e28c9a68ee73c1c964de" FOREIGN KEY ("membership_type_id") REFERENCES "membership_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    await queryRunner.query(`
            ALTER TABLE "check_in"
            ADD CONSTRAINT "FK_a350fde5d05ca1dcfb36a8e1dd4" FOREIGN KEY ("member_id") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    await queryRunner.query(`
            ALTER TABLE "check_in"
            ADD CONSTRAINT "FK_c574812a17a3ef89da9372fcd9c" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    await queryRunner.query(`
            ALTER TABLE "class_instructor"
            ADD CONSTRAINT "FK_92ee4d722d6f10fbd9310c8c01f" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `)
    await queryRunner.query(`
            ALTER TABLE "class_instructor"
            ADD CONSTRAINT "FK_809a772418256eb2f918fa3e3e9" FOREIGN KEY ("member_id") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "class_instructor" DROP CONSTRAINT "FK_809a772418256eb2f918fa3e3e9"
        `)
    await queryRunner.query(`
            ALTER TABLE "class_instructor" DROP CONSTRAINT "FK_92ee4d722d6f10fbd9310c8c01f"
        `)
    await queryRunner.query(`
            ALTER TABLE "check_in" DROP CONSTRAINT "FK_c574812a17a3ef89da9372fcd9c"
        `)
    await queryRunner.query(`
            ALTER TABLE "check_in" DROP CONSTRAINT "FK_a350fde5d05ca1dcfb36a8e1dd4"
        `)
    await queryRunner.query(`
            ALTER TABLE "member" DROP CONSTRAINT "FK_3053a50e28c9a68ee73c1c964de"
        `)
    await queryRunner.query(`
            ALTER TABLE "class" DROP CONSTRAINT "FK_e451d4224459fa17863bd1ff466"
        `)
    await queryRunner.query(`
            DROP INDEX "public"."IDX_809a772418256eb2f918fa3e3e"
        `)
    await queryRunner.query(`
            DROP INDEX "public"."IDX_92ee4d722d6f10fbd9310c8c01"
        `)
    await queryRunner.query(`
            DROP TABLE "class_instructor"
        `)
    await queryRunner.query(`
            DROP TABLE "check_in"
        `)
    await queryRunner.query(`
            DROP TABLE "member"
        `)
    await queryRunner.query(`
            DROP TABLE "class"
        `)
    await queryRunner.query(`
            DROP TABLE "style"
        `)
    await queryRunner.query(`
            DROP TABLE "membership_type"
        `)
  }
}
