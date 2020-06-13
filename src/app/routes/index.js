import { Router } from 'express';
import userRouter from './user.routes';
import sessionRouter from './session.routes';
import vacationRouter from './vacation.routes';
import groupRouter from './group.routes';

const routes = new Router();

routes.use('/users', userRouter);

routes.use('/sessions', sessionRouter);

routes.use('/vacations', vacationRouter);

routes.use('/groups', groupRouter);

export default routes;
