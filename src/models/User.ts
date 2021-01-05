import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import Event from './Event';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Event, (event) => event.id_usuario_evento)
  @JoinColumn({ name: 'id_usuario' })
  eventos: Event;

  @Column()
  cpf: string;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  telefone: string;

  @Column()
  whatsapp: string;

  @Column()
  empresa_instituicao: string;

  @Column()
  cep: string;

  @Column()
  endereco_completo: string;

  @Column()
  estado_uf: string;

  @Column()
  municipio: string;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
