import { Router } from 'express';
import { resolve } from 'path';

import StreamController from '../controller/StreamController';

const routes = Router();

const streamController = new StreamController();

routes.get('/check', (req, res) => res.json({ status: 'ok' }));
routes.get('/html-stream', (req, res) =>
  res.sendFile(resolve(__dirname, '..', 'html', 'index.html')),
);

routes.get('/stream', streamController.get);

export default routes;
