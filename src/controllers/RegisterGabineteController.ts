import { Request, Response } from 'express';

import RegisterGabinete from '../services/RegisterGabineteService';

class RegisterGabineteController {
  async create(request: Request, response: Response) {
    const {
      nome,
      data_nascimento,
      email,
      empresa,
      telefone,
      whatsapp,
      faloucom,
      endereco,
    } = request.body;

    const registerGabineteService = new RegisterGabinete();

    const registerGabinete = registerGabineteService.execute({
      nome,
      data_nascimento,
      email,
      empresa,
      telefone,
      whatsapp,
      faloucom,
      endereco,
    });

    return response.json(registerGabinete);
  }
}

export default RegisterGabineteController;
