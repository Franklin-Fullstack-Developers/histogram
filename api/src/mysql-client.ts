import { Connection } from 'promise-mysql';
import mysql from 'promise-mysql';

export let db: Connection;

export async function openMysqlConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'fullstack_developers',
  });

  db = connection;
}
