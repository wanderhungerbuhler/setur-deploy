import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';

@Entity('events')
class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_usuario: string;

  @ManyToOne(() => User, (user) => user.eventos)
  @JoinColumn({ name: 'id_usuario' })
  id_usuario_evento: User;

  @Column()
  segmentos: string;

  @Column()
  orgao_autoridade: string;

  @Column()
  nome_evento: string;

  @Column()
  nome_categoria_turismo: string;

  @Column()
  descricao_motivo: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Event;
