import { app } from './app';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const host = process.env.HOST ?? 'localhost';

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log('\x1b[36m%s\x1b[0m', `[ ready ] http://${host}:${port}`);
});
