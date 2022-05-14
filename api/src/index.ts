import express, { json } from 'express';
import { openMysqlConnection } from './mysql-client';
import cors from 'cors';

async function main() {
  await openMysqlConnection();

  const app = express();

  app.use(cors());
  app.use(json());

  app.use('/posts', require('./postRoutes').default);

  app.listen(4000, () => {
    console.log('Listening on port 4000!');
  });
}

main();
