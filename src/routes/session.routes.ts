import { Router } from 'express';

import SessionService from '../services/SessionService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const sessionService = new SessionService();

    const { user, token } = await sessionService.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionRouter;
