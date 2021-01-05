import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import User from '../models/User';

import UserService from '../services/UserService';
import EventService from '../services/EventService';

import userView from '../views/user.view';

class UserController {
  async index(request: Request, response: Response) {
    const userRepository = getRepository(User);

    const users = await userRepository.find({
      relations: ['eventos'],
    });

    return response.json(userView.renderMany(users));
  }

  async create(request: Request, response: Response) {
    try {
      const {
        cpf,
        nome,
        sobrenome,
        email,
        password,
        telefone,
        whatsapp,
        empresa_instituicao,
        cep,
        endereco_completo,
        estado_uf,
        municipio,

        segmentos,
        orgao_autoridade,
        nome_evento,
        nome_categoria_turismo,
        descricao_motivo,
        status,
      } = request.body;

      const createUser = new UserService();

      const user = await createUser.execute({
        cpf,
        nome,
        sobrenome,
        email,
        password,
        telefone,
        whatsapp,
        empresa_instituicao,
        cep,
        endereco_completo,
        estado_uf,
        municipio,
        status,
      });

      delete user.password;

      const createEvent = new EventService();

      const event = await createEvent.execute({
        id_usuario: user.id,
        segmentos,
        orgao_autoridade,
        nome_evento,
        nome_categoria_turismo,
        descricao_motivo,
      });

      return response.json({ user, event });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default UserController;
