import { Router } from 'express';
import userRouter from './user.routes';
import sessionRouter from './session.routes';
import registerGabineteRouter from './registergabinete.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);
routes.use('/registergabinete', registerGabineteRouter);

export default routes;
