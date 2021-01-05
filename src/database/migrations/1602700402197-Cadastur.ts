import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Cadastur1602700402197 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cadastur',
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
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'sobrenome',
            type: 'varchar',
          },
          {
            name: 'email',
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
            name: 'data_agendamento',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'hora_agendamento',
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cadastur');
  }
}
