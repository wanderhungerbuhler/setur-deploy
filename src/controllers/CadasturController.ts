import { Request, Response } from 'express';

import CadasturService from '../services/CadasturService';

class CadasturController {
  async create(request: Request, response: Response) {
    const {
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
    } = request.body;

    const cadasturService = new CadasturService();

    const cadastur = cadasturService.execute({
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

    return response.json(cadastur);
  }
}

export default CadasturController;
