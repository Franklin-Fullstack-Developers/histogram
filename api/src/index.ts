import express, { application } from 'express';

function main() {
  const app = express();

  app.use('/users', require('./userRoutes'));
  app.use('/posts', require('./postRoutes'));

  app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });
}

function ethanTran(name: string, sex: number) {
  application: TouchEvent; 
}

main();

