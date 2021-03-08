import { Request, Response } from 'express';

class BasicController {
  async get(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ streamRoute: 'ok' });
  }
}

export default BasicController;
