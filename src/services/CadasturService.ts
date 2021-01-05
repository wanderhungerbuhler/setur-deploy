import Cadastur from '../models/Cadastur';

import { getRepository } from 'typeorm';

interface Request {
  cpf: string;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  whatsapp: string;
  data_agendamento: string;
  hora_agendamento: string;
  descricao_motivo: string;
  status: string;
}

class CadasturService {
  public async execute({
    cpf,
    nome,
    sobrenome,
    email,
    telefone,
    whatsapp,
    data_agendamento,
    hora_agendamento,
    descricao_motivo,
    status,
  }: Request) {
    const cadasturRepository = getRepository(Cadastur);

    const cadastur = await cadasturRepository.create({
      cpf,
      nome,
      sobrenome,
      email,
      telefone,
      whatsapp,
      data_agendamento,
      hora_agendamento,
      descricao_motivo,
      status,
    });

    await cadasturRepository.save(cadastur);

    return cadastur;
  }
}

export default CadasturService;
