import express, { application } from 'express';
import mysql from 'promise-mysql';
import { openMysqlConnection } from './mysql-client';

type User = {
  id: number;
  name: string;
  age: number;
};

async function main() {
  await openMysqlConnection();

  // [12, 13]

  const app = express();

  app.use('/users', require('./userRoutes'));
  app.use('/posts', require('./postRoutes'));

  app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });
}

main();
