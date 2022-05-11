import express, { application } from 'express';
import { openMysqlConnection } from './mysql-client';

async function main() {
  await openMysqlConnection();

  const app = express();

  app.use('/users', require('./userRoutes'));
  app.use('/posts', require('./postRoutes'));

  app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });
}

main();
