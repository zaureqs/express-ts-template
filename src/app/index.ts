import { Request, Response, Router } from 'express';

const app: Router = Router();

app.route('/').get((_req: Request, res: Response) => {
  res.send('app router');
});

app.route('/sd').get((_req: Request, res: Response) => {
  res.send('app router');
});

export default app;
