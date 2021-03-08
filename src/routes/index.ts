import { Router } from 'express';

import BasicController from '../controller/BasicController';

const routes = Router();

const basicController = new BasicController();

routes.get('/check', (req, res) => res.json({ status: 'ok' }));
routes.get('/', basicController.show);

export default routes;
