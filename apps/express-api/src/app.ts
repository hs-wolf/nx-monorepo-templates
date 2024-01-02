import express, {
  Response as ExResponse, Request as ExRequest, urlencoded, json, NextFunction
} from 'express';
import { ValidateError } from 'tsoa';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from '../generated/routes/routes';

export const app = express();

app.use(urlencoded({ extended: true }));

app.use(json());

app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => res.send(swaggerUi.generateHTML(await import('../generated/spec/swagger.json'))));

RegisterRoutes(app);

app.use((_req, res: ExResponse) => {
  res.status(404).send({
    message: 'Not Found'
  });
});

app.use((
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void => {
  if (err instanceof ValidateError) {
    // eslint-disable-next-line no-console
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: err?.message ?? 'Internal Server Error'
    });
  }
  return next();
});
