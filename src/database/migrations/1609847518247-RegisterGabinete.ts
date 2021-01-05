import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class RegisterGabinete1609847518247 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'registergabinete',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'data_nascimento',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'empresa',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'telefone',
            type: 'varchar',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'whatsapp',
            type: 'varchar',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'faloucom',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'endereco',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('registergabinete');
  }
}
