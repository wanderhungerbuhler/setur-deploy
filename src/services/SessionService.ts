import User from '../models/User';
import { getRepository } from 'typeorm';

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AuthConfig from '../config/auth';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class SessionService {
  public async execute({ email, password }: Request): Promise<Response> {
    const sessionRepository = getRepository(User);

    const user = await sessionRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password combination');
    }

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) {
      throw new Error('Incorrect email/password combination');
    }

    const { secret, expiresIn } = AuthConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default SessionService;
