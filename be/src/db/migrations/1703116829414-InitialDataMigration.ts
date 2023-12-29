import { MigrationInterface, QueryRunner } from 'typeorm'
import { MemberService } from '../../member/member.service'
import { Level } from '../../class/level.enum'
import { Gender } from '../../gender.enum'
import { DayOfWeek } from '../../class/day-of-week.enum'

export class InitialDataMigration1703116829414 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Insert membership types
    await queryRunner.query(`
            INSERT INTO membership_type (name, forte_id, price, description, num_classes_per_week, num_styles, max_age)
            VALUES ('3X Per Week', '0', 149, 'Your choice-  any 3 classes per week', 3, -1, 200)
        `)
    await queryRunner.query(`
            INSERT INTO membership_type (name, forte_id, price, description, num_classes_per_week, num_styles, max_age)
            VALUES ('UNLIMITED ONE STYLE', '1', 169, 'Unlimited instruction in one style, includes access to gym during open hours', -1, 1, 200)
        `)
    await queryRunner.query(`
            INSERT INTO membership_type (name, forte_id, price, description, num_classes_per_week, num_styles, max_age)
            VALUES ('UNLIMITED ALL STYLES', '2', 199, 'Unlimited instruction in all styles, includes access to gym, during open hours', -1, -1, 200)
        `)
    await queryRunner.query(`
            INSERT INTO membership_type (name, forte_id, price, description, num_classes_per_week, num_styles, max_age)
            VALUES ('UPRISE YOUTH', '3', 125, 'Ages 4-7 & Ages 8-13', -1, -1, ${MemberService.MAX_AGE_YOUTH})
        `)
    await queryRunner.query(`
            INSERT INTO membership_type (name, forte_id, price, description, num_classes_per_week, num_styles, max_age)
            VALUES ('GYM USE ONLY - NO CLASSES', '4', 99, 'weight room, bag areas, strength training equipment', 0, -1, 200)
        `)
    const [staffMembershipType] = await queryRunner.query(`
            INSERT INTO membership_type (name, forte_id, price, description, num_classes_per_week, num_styles, max_age)
            VALUES ('Staff', '5', 0, 'Complementary membership for staff and Uprise consultants', -1, -1, 200)
            RETURNING id
        `)

    // Insert styles
    const [muayThai] = await queryRunner.query(`
            INSERT INTO style (name)
            VALUES ('Muay Thai')
            RETURNING id
        `)
    const [bjj] = await queryRunner.query(`
            INSERT INTO style (name)
            VALUES ('Jiu Jitsu')
            RETURNING id
        `)
    const [mma] = await queryRunner.query(`
            INSERT INTO style (name)
            VALUES ('MMA')
            RETURNING id
        `)
    const [wrestling] = await queryRunner.query(`
            INSERT INTO style (name)
            VALUES ('Wrestling')
            RETURNING id
        `)
    const [yoga] = await queryRunner.query(`
            INSERT INTO style (name)
            VALUES ('Yoga')
            RETURNING id
        `)

    // Insert staff
    await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Karim Varela', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+13108041358', true, ${staffMembershipType.id}, 'active')
        `)
    const [lubo] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Lubo Markow', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+1', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [gustavo] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Gustavo Gasperin', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+2', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [joanna] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Joanna Doyle', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+3', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [pete] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Pete Panos', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+13236915970', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [owen] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Owen Finnegan', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+5', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [jason] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Jason Fevrier', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+6', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [axel] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Axel', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+7', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [rich] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Rich Hacking', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+8', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [sasha] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Sasha Arrieta', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+9', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [somyos] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Somyos Lohapiboon', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+10', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [eric] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Eric Yung', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '11+', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [james] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('James Doyle', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+12', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [amir] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Amir Yonis', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+13', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [marciano] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Marciano Reconnu', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+14', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [val] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Val Rimer', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+15', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [abraham] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Abraham Rafael', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+16', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)
    const [manuel] = await queryRunner.query(`
            INSERT INTO member (name, dob, address, phone, is_staff, membership_type_id, membership_status)
            VALUES ('Manuel Conde', '1981-06-12', '617 Mildred Ave., Venice, CA 90291', '+17', true, ${staffMembershipType.id}, 'active')
            RETURNING id
        `)

    // Insert classes
    //Monday
    let [c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu - No Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 7, ${DayOfWeek.MONDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${lubo.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu - Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 10, ${DayOfWeek.MONDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${gustavo.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 10, ${DayOfWeek.MONDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${abraham.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('MMA', '${Level.BEGINNER}', ${MemberService.MAX_AGE_YOUTH}, 200, ${mma.id}, 1, '${Gender.MIXED}', 17, ${DayOfWeek.MONDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${pete.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu', '${Level.BEGINNER}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 18, ${DayOfWeek.MONDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${owen.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai (Clinch)', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 18, ${DayOfWeek.MONDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${pete.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Strength & Conditioning', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, null, 1, '${Gender.MIXED}', 19, ${DayOfWeek.MONDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${jason.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu', '${Level.ADVANCED}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 19, ${DayOfWeek.MONDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${axel.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu - Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 20, ${DayOfWeek.MONDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${gustavo.id})
        `)

    // Tuesday
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu - Rolls', '${Level.INTERMEDIATE}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 7, ${DayOfWeek.TUESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${lubo.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 10, ${DayOfWeek.TUESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${pete.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('MMA', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${mma.id}, 1, '${Gender.MIXED}', 11, ${DayOfWeek.TUESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${lubo.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai (Boxing)', '${Level.BEGINNER}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 18, ${DayOfWeek.TUESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${rich.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai (Boxing)', '${Level.INTER_ADVANCED}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 19, ${DayOfWeek.TUESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${pete.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu - No Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 20, ${DayOfWeek.TUESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${gustavo.id})
        `)

    // Wednesday
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu - No Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 7, ${DayOfWeek.WEDNESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${lubo.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu - No Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 10, ${DayOfWeek.WEDNESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${gustavo.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 10, ${DayOfWeek.WEDNESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${sasha.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('MMA Basics', '${Level.KIDS_4_7}', ${MemberService.MIN_AGE_YOUTH}, 8, ${mma.id}, 1, '${Gender.MIXED}', 16, ${DayOfWeek.WEDNESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${manuel.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('MMA Basics', '${Level.KIDS_8_13}', 8, ${MemberService.MAX_AGE_YOUTH}, ${mma.id}, 1, '${Gender.MIXED}', 17, ${DayOfWeek.WEDNESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${manuel.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai (Kicks & Blocks)', '${Level.BEGINNER}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 18, ${DayOfWeek.WEDNESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${somyos.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai (Kicks & Blocks)', '${Level.INTER_ADVANCED}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 19, ${DayOfWeek.WEDNESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${eric.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('MMA', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${mma.id}, 1, '${Gender.MIXED}', 20, ${DayOfWeek.WEDNESDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${james.id})
        `)

    // Thursday
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 10, ${DayOfWeek.THURSDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${pete.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('MMA', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${mma.id}, 1, '${Gender.MIXED}', 11, ${DayOfWeek.THURSDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${lubo.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai (Pad Work)', '${Level.BEGINNER}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 18, ${DayOfWeek.THURSDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${amir.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai (Pad Work)', '${Level.INTER_ADVANCED}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 19, ${DayOfWeek.THURSDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${pete.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu - No Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 20, ${DayOfWeek.THURSDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${gustavo.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai Fight Team', '${Level.INVITE}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 20, ${DayOfWeek.THURSDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${pete.id})
        `)

    // Friday
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu - No Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 7, ${DayOfWeek.FRIDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${lubo.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu - Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 10, ${DayOfWeek.FRIDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${gustavo.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai', '${Level.BEGINNER}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 10, ${DayOfWeek.FRIDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${abraham.id})
        `)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${sasha.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai Sparring', '${Level.BEGINNER}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 18, ${DayOfWeek.FRIDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${pete.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai Sparring', '${Level.INTER_ADVANCED}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 19, ${DayOfWeek.FRIDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${pete.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu - No Gi', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.MIXED}', 20, ${DayOfWeek.FRIDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${marciano.id})
        `)

    // Saturday
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('MMA Basics', '${Level.KIDS_4_7}', ${MemberService.MIN_AGE_YOUTH}, 8, ${mma.id}, 1, '${Gender.MIXED}', 9, ${DayOfWeek.SATURDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${manuel.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('MMA Basics', '${Level.KIDS_8_13}', 8, ${MemberService.MAX_AGE_YOUTH}, ${mma.id}, 1, '${Gender.MIXED}', 10, ${DayOfWeek.SATURDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${manuel.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Muay Thai', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${muayThai.id}, 1, '${Gender.MIXED}', 11, ${DayOfWeek.SATURDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${pete.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Yoga', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${yoga.id}, 1, '${Gender.MIXED}', 12, ${DayOfWeek.SATURDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${val.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Jiu Jitsu', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${bjj.id}, 1, '${Gender.FEMALE}', 13, ${DayOfWeek.SATURDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${joanna.id})
        `)
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('MMA', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${mma.id}, 1, '${Gender.MIXED}', 13, ${DayOfWeek.SATURDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${pete.id})
        `)

    // Sunday
    ;[c] = await queryRunner.query(`
            INSERT INTO class (name, level, min_age, max_age, style_id, duration_hours, gender, start_hour, day_of_week)
            VALUES ('Submission Wrestling', '${Level.ALL}', ${MemberService.MAX_AGE_YOUTH}, 200, ${wrestling.id}, 2, '${Gender.MIXED}', 10, ${DayOfWeek.SUNDAY})
        RETURNING id`)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${lubo.id})
        `)
    await queryRunner.query(`
            INSERT INTO class_instructor (class_id, member_id)
            VALUES (${c.id}, ${axel.id})
        `)
  }

  public async down(): Promise<void> {}
}
