import { Connection } from 'promise-mysql';
import mysql from 'promise-mysql';

export let db: Connection;

export async function openMysqlConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
  });

  db = connection;
}
