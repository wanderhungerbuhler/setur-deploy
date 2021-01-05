import { Router } from 'express';

import RegisterGabineteController from '../controllers/RegisterGabineteController';

const registerGabineteRouter = Router();

const registerGabineteController = new RegisterGabineteController();

registerGabineteRouter.post('/', registerGabineteController.create);

export default registerGabineteRouter;
