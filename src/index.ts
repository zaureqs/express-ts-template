import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import 'module-alias/register';

import express, { Request, Response } from 'express';

import appRouter from '@/app';

import logger from '@/_middlewares/logger';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(logger);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api/v1', appRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
