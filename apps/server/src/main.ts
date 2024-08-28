import express, {
  json,
  urlencoded,
  Response as ExResponse,
  Request as ExRequest,
} from 'express';
import http from 'http';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from '../generated/routes';
import swagger from '../generated/swagger.json';

const app = express();
const server = http.createServer(app);

app.use(
  urlencoded({
    extended: true,
  })
);

app.use(json());

app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(swagger));
});

RegisterRoutes(app);

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

server.listen(port, host, () => {
  console.log(`Server ready at: http://${host}:${port}`);
});

function shutdown() {
  console.log('Gracefully shutting down...');
  server.close(() => {
    console.log('Closed out remaining connections.');
    process.exit(0);
  });
  setTimeout(() => {
    console.error('Forcing shutdown.');
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
