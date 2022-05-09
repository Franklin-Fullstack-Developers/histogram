import { Router } from 'express';
import { db } from './mysql-client';

const router = Router();

router.get('/', (req, res) => {
  db?.query('SELECT * FROM Users');
});

router.post('/', (req, res) => {
  db?.query('INSERT INTO Users SET ?', req.body);
});

export default router;
