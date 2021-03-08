import { Router } from 'express';

import StreamController from '../controller/StreamController';

const routes = Router();

const streamController = new StreamController();

routes.get('/check', (req, res) => res.json({ status: 'ok' }));
routes.get('/stream', streamController.get);

export default routes;
