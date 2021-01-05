import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('registergabinete')
class RegisterGabinete {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  data_nascimento: string;

  @Column()
  email: string;

  @Column()
  empresa: string;

  @Column()
  telefone: string;

  @Column()
  whatsapp: string;

  @Column()
  faloucom: string;

  @Column()
  endereco: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default RegisterGabinete;
