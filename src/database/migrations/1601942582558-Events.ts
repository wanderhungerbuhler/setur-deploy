import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Events1601942582558 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'events',
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
            name: 'id_usuario',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'segmentos',
            type: 'varchar',
          },
          {
            name: 'orgao_autoridade',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nome_evento',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nome_categoria_turismo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'descricao_motivo',
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

    await queryRunner.createForeignKey(
      'events',
      new TableForeignKey({
        name: 'EventUser',
        columnNames: ['id_usuario'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('id_usuario', 'EventUser');
    await queryRunner.dropTable('events');
  }
}
