import { Router } from 'express';
import { db } from './mysql-client';

const router = Router();

router.get('/', async (req, res) => {
  const result = await db.query('SELECT * FROM Posts', req.body);
  res.json(result);
});

router.post('/', async (req, res) => {
  const { title, body, author } = req.body;

  const result = await db.query('INSERT INTO Posts (title, body, author) VALUES (?, ?, ?)', [title, body, author]);
  res.json({
    id: result.insertId
  });
});

export default router;
