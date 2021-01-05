import { getRepository } from 'typeorm';
import RegisterGabinete from '../models/RegisterGabinete';

interface Request {
  nome: string;
  data_nascimento: string;
  email: string;
  empresa: string;
  telefone: string;
  whatsapp: string;
  faloucom: string;
  endereco: string;
}

class RegisterGabineteService {
  public async execute({
    nome,
    data_nascimento,
    email,
    empresa,
    telefone,
    whatsapp,
    faloucom,
    endereco,
  }: Request) {
    const registerGabineteRepository = getRepository(RegisterGabinete);

    const registerGabinete = await registerGabineteRepository.create({
      nome,
      data_nascimento,
      email,
      empresa,
      telefone,
      whatsapp,
      faloucom,
      endereco,
    });

    await registerGabineteRepository.save(registerGabinete);

    return registerGabinete;
  }
}

export default RegisterGabineteService;
