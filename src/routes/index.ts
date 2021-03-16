import { Router } from 'express';
import { resolve } from 'path';

import StreamController from '../controller/StreamController';
import SendFileController from '../controller/SendFileController';

const routes = Router();

const streamController = new StreamController();
const sendFileController = new SendFileController();

routes.get('/check', (req, res) => res.json({ status: 'ok' }));
routes.get('/html-all', (req, res) =>
  res.sendFile(resolve(__dirname, '..', 'html', 'index.html')),
);

routes.get('/stream', streamController.get);
routes.get('/send-file', sendFileController.get);

export default routes;
