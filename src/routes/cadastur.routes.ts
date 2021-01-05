import { Router } from 'express';

import CadasturController from '../controllers/CadasturController';

const cadasturRouter = Router();

const cadasturController = new CadasturController();

cadasturRouter.post('/', cadasturController.create);

export default cadasturRouter;
