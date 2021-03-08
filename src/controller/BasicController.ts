import { Request, Response } from 'express';

class BasicController {
  async show(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ basicRoute: 'ok' });
  }
}

export default BasicController;
