import { Router } from 'express';
import { resolve } from 'path';

import StreamController from '../controller/StreamController';
import SendFileController from '../controller/SendFileController';
import SendSyncController from '../controller/SendSyncController';

const routes = Router();

const streamController = new StreamController();
const sendFileController = new SendFileController();
const sendSyncController = new SendSyncController();

routes.get('/check', (req, res) => res.json({ status: 'ok' }));
routes.get('/html-all', (req, res) =>
  res.sendFile(resolve(__dirname, '..', 'html', 'index.html')),
);
routes.get('/html-stream', (req, res) =>
  res.sendFile(resolve(__dirname, '..', 'html', 'index-stream.html')),
);
routes.get('/html-send-file', (req, res) =>
  res.sendFile(resolve(__dirname, '..', 'html', 'index-send-file.html')),
);
routes.get('/html-send-sync', (req, res) =>
  res.sendFile(resolve(__dirname, '..', 'html', 'index-send-sync.html')),
);

routes.get('/stream', streamController.get);
routes.get('/send-file', sendFileController.get);
routes.get('/send-sync', sendSyncController.get);

export default routes;
