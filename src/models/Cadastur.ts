import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cadastur')
class Cadastur {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cpf: string;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  whatsapp: string;

  @Column()
  data_agendamento: string;

  @Column()
  hora_agendamento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Cadastur;
