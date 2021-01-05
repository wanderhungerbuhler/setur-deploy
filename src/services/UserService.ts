import User from '../models/User';

import { hash } from 'bcryptjs';

import { getRepository } from 'typeorm';

interface Request {
  cpf: string;
  nome: string;
  sobrenome: string;
  email: string;
  password: string;
  telefone: string;
  whatsapp: string;
  empresa_instituicao: string;
  cep: string;
  endereco_completo: string;
  estado_uf: string;
  municipio: string;
  status: string;
}

class UserService {
  public async execute({
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
  }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const userExists = await userRepository.findOne({ where: { cpf } });

    // SE EXISTIR O USUÁRIO
    // APENAS ATUALIZE ÀS INFORMAÇÕES
    // QUE SÃO "UNIQUE/ÚNICAS"
    if (userExists) {
      userExists.cpf = cpf;
      userExists.nome = nome;
      userExists.email = email;
      userExists.telefone = telefone;
      userExists.whatsapp = whatsapp;
      userExists.cep = cep;
      userExists.endereco_completo = endereco_completo;
      userExists.estado_uf = estado_uf;
      userExists.municipio = municipio;

      await userRepository.save(userExists);

      return userExists;
    } else {
      const passwordHash = await hash(password, 8);

      const user = await userRepository.create({
        cpf,
        nome,
        sobrenome,
        email,
        password: passwordHash,
        telefone,
        whatsapp,
        empresa_instituicao,
        cep,
        endereco_completo,
        estado_uf,
        municipio,
        status,
      });

      await userRepository.save(user);

      return user;
    }
  }
}

export default UserService;
