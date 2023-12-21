import { MigrationInterface, QueryRunner } from 'typeorm'
import { MemberService } from '../../member/member.service'
import { Level } from '../../class/level.enum'
import { Gender } from '../../gender.enum'

export class InitialDataMigration1703116829414 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "check_in"
            ADD CONSTRAINT "FK_a350fde5d05ca1dcfb36a8e1dd4" FOREIGN KEY ("member_id") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    await queryRunner.query(`
            ALTER TABLE "check_in"
            ADD CONSTRAINT "FK_000528c95cefb269e6b19d6884a" FOREIGN KEY ("scheduled_class_id") REFERENCES "scheduled_class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    await queryRunner.query(`
            ALTER TABLE "scheduled_class"
            ADD CONSTRAINT "FK_b591cbff9f7ac7229d0eb980f17" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    await queryRunner.query(`
            ALTER TABLE "class"
            ADD CONSTRAINT "FK_e451d4224459fa17863bd1ff466" FOREIGN KEY ("style_id") REFERENCES "style"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    await queryRunner.query(`
            ALTER TABLE "class"
            ADD CONSTRAINT "FK_064abf1722d3bde109fd5b11c24" FOREIGN KEY ("instructor_id") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    await queryRunner.query(`
            ALTER TABLE "member"
            ADD CONSTRAINT "FK_3053a50e28c9a68ee73c1c964de" FOREIGN KEY ("membership_type_id") REFERENCES "membership_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `)

    // Insert membership types
    await queryRunner.query(`
            INSERT INTO membership_type (name, forte_id, price, description, num_classes_per_week, num_styles, max_age)
            VALUES ('3X Per Week', '0', 149, 'Your choice-  any 3 classes per week', 3, -1, ${Number.MAX_SAFE_INTEGER})
        `)
    await queryRunner.query(`
            INSERT INTO membership_type (name, forte_id, price, description, num_classes_per_week, num_styles, max_age)
            VALUES ('UNLIMITED ONE STYLE', '1', 169, 'Unlimited instruction in one style, includes access to gym during open hours', -1, 1, ${Number.MAX_SAFE_INTEGER})
        `)
    await queryRunner.query(`
            INSERT INTO membership_type (name, forte_id, price, description, num_classes_per_week, num_styles, max_age)
            VALUES ('UNLIMITED ALL STYLES', '2', 199, 'Unlimited instruction in all styles, includes access to gym, during open hours', -1, -1, ${Number.MAX_SAFE_INTEGER})
        `)
    await queryRunner.query(`
            INSERT INTO membership_type (name, forte_id, price, description, num_classes_per_week, num_styles, max_age)
            VALUES ('UPRISE YOUTH', '3', 125, 'Ages 4-7 & Ages 8-13', -1, -1, ${MemberService.MAX_AGE_YOUTH})
        `)
    await queryRunner.query(`
            INSERT INTO membership_type (name, forte_id, price, description, num_classes_per_week, num_styles, max_age)
            VALUES ('GYM USE ONLY - NO CLASSES', '4', 99, 'weight room, bag areas, strength training equipment', 0, -1, ${Number.MAX_SAFE_INTEGER})
        `)
    const [staffMembershipType] = await queryRunner.query(`
            INSERT INTO membership_type (name, forte_id, price, description, num_classes_per_week, num_styles, max_age)
            VALUES ('Staff', '5', 0, 'Complementary membership for staff and Uprise consultants', -1, -1, ${Number.MAX_SAFE_INTEGER})
            RETURNING ID
        `)

    // Insert styles
    const [muayThai] = await queryRunner.query(`
            INSERT INTO style (name)
            VALUES ('Muay Thai')
            RETURNING ID
        `)
    const [bjj] = await queryRunner.query(`
            INSERT INTO style (name)
            VALUES ('Jiu Jitsu')
            RETURNING ID
        `)
    const [mma] = await queryRunner.query(`
            INSERT INTO style (name)
            VALUES ('MMA')
            RETURNING ID
        `)
    const [wrestling] = await queryRunner.query(`
            INSERT INTO style (name)
            VALUES ('Wrestling')
            RETURNING ID
        `)
    const [yoga] = await queryRunner.query(`
            INSERT INTO style (name)
            VALUES ('Yoga')
            RETURNING ID
        `)

    // Insert staff
    await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Karim Varela', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+13108041358', true, ${staffMembershipType.id}, 'active')
        `)
    const [lubo] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Lubo Markow', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+1', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [gustavo] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Gustavo Gasperin', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+2', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Abraham Rafael', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+3', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [pete] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Pete Panos', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+13236915970', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [owen] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Owen Finnegan', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+5', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [jason] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Jason Fevrier', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+6', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [axel] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Axel', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+7', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [rich] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Rich Hacking', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+8', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [sasha] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Sasha Arrieta', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+9', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [somyos] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Somyos Lohapiboon', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+10', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [eric] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Eric Yung', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '11+', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [james] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('James Doyle', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+12', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [amir] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Amir Yonis', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+13', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [marciano] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Marciano Reconnu', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [val] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Val Rimer', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)
    const [abraham] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Abraham Rafael', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+', true, ${staffMembershipType.id}, 'active')
            REUTRNING ID
        `)

    // Insert classes
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Jiu Jitsu - No Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${lubo.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Jiu Jitsu - Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${gustavo.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Muay Thai', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${muayThai.id}, ${abraham.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('MMA', '${Level.BEGINNER}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${mma.id}, ${pete.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Jiu Jitsu', '${Level.BEGINNER}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${owen.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Muay Thai (Clinch)', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${muayThai.id}, ${pete.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Strength & Conditioning', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, null, ${jason.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Jiu Jitsu', '${Level.ADVANCED}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${axel.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Jiu Jitsu - Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${gustavo.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Jiu Jitsu - Rolls', '${Level.INTERMEDIATE}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${pete.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Jiu Jitsu', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${pete.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('MMA', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${mma.id}, ${lubo.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Muay Thai (Boxing)', '${Level.BEGINNER}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${muayThai.id}, ${rich.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Muay Thai (Boxing)', '${Level.INTER_ADVANCED}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${muayThai.id}, ${pete.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Jiu Jitsu - No Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${gustavo.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('Jiu Jitsu - No Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${lubo.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
    await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, instructor_id, duration_hours, gender)
            VALUES ('', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, ${Number.MAX_SAFE_INTEGER}, ${bjj.id}, ${.id}, 1, '${Gender.MIXED}')
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
