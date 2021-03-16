import { Request, Response } from 'express';

import { resolve } from 'path';
import fs from 'fs';

class SendSyncController {
  async get(req: Request, res: Response): Promise<void> {
    const filePath = resolve(__dirname, '..', 'upload', 'ex.mp4');

    fs.readFile(filePath, (err, data) => {
      res.send(data);
    });
  }
}

export default SendSyncController;
