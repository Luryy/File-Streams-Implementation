import { Request, Response } from 'express';

import { resolve } from 'path';

class SendFileController {
  async get(req: Request, res: Response): Promise<void> {
    const filePath = resolve(__dirname, '..', 'upload', 'ex.mp4');

    return res.sendFile(filePath);
  }
}

export default SendFileController;
