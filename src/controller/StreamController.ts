import { Request, Response } from 'express';

import fs from 'fs';
import { resolve } from 'path';

class StreamController {
  async get(req: Request, res: Response): Promise<void> {
    const { range } = req.headers;
    const filePath = resolve(__dirname, '..', 'upload', 'ex.mp4');
    const { size: fileSize } = fs.statSync(filePath);

    const start = Number(range?.replace(/\D/g, '')) || 0;
    const CHUNK_SIZE = 1000000;
    const end = Math.min(start + CHUNK_SIZE, fileSize - 1);

    const headers = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Type': 'video/mp4',
      'Content-Length': CHUNK_SIZE,
    };

    res.writeHead(206, headers);

    const fileStreams = fs.createReadStream(filePath, { start, end });

    fileStreams.pipe(res);
  }
}

export default StreamController;
