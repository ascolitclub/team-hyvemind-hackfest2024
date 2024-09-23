"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHostelEntities1625207938471 = void 0;
const typeorm_1 = require("typeorm");
class CreateHostelEntities1625207938471 {
    async up(queryRunner) {
        // Create HostelLocation table
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'hostel_location',
            columns: [
                {
                    name: 'location_id',
                    type: 'bigint',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'lat',
                    type: 'decimal',
                    precision: 9,
                    scale: 6,
                },
                {
                    name: 'lng',
                    type: 'decimal',
                    precision: 9,
                    scale: 6,
                },
                {
                    name: 'opening_hour',
                    type: 'boolean',
                },
                {
                    name: 'location',
                    type: 'varchar',
                    length: '255',
                },
            ],
        }));
        // Create HostelCredential table
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'hostel_credential',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: 'hostel_name',
                    type: 'varchar',
                    length: '100',
                },
                {
                    name: 'rating',
                    type: 'int',
                    default: 0,
                    isUnique: true,
                },
                {
                    name: 'hostel_phoneNumber',
                    type: 'text',
                    isUnique: true,
                },
                {
                    name: 'user_ratings_total',
                    type: 'varchar',
                    length: '255',
                    default: 0,
                },
                {
                    name: 'opening_hours',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'location_id',
                    type: 'bigint',
                    isNullable: false, // Ensure the foreign key is not nullable
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
        // Create foreign key relationship
        await queryRunner.createForeignKey('hostel_credential', new typeorm_1.TableForeignKey({
            columnNames: ['location_id'],
            referencedColumnNames: ['location_id'],
            referencedTableName: 'hostel_location',
            onDelete: 'CASCADE', // Optional: adjust as necessary
        }));
    }
    async down(queryRunner) {
        // Drop foreign key first
        const table = await queryRunner.getTable('hostel_credential');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('location_id') !== -1);
        await queryRunner.dropForeignKey('hostel_credential', foreignKey);
        // Drop tables
        await queryRunner.dropTable('hostel_credential');
        await queryRunner.dropTable('hostel_location');
    }
}
exports.CreateHostelEntities1625207938471 = CreateHostelEntities1625207938471;
//# sourceMappingURL=1723800830087-Hostel.js.map