import { app } from './app';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(port, host, () => { 
  console.log('\x1b[36m%s\x1b[0m', `[ ready ] http://${host}:${port}`);
});
