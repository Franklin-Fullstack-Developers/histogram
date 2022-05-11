import { Router } from 'express';
import { db } from './mysql-client';

const router = Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM Posts');
});

router.post('/', (req, res) => {
  db.query('INSERT INTO Posts SET ?', req.body);
});

router.delete('/', (req, res) => {
  db.query('DELETE FROM Posts WHERE id = ?', req.body.id);
});

router.put('/', (req, res) => {
  db.query('UPDATE Posts SET ? WHERE id = ?', [req.body, req.body.id]);
});

export default router;
