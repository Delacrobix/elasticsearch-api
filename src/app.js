import dotenv from 'dotenv';
import express from 'express';
import pkg from 'body-parser';
import swaggerDocs from './config/swagger.js';
import elasticRouter from './routes/elasticRoutes.js';
import cors from 'cors';

const { json } = pkg;

dotenv.config();

const app = express();

app.use(json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  swaggerDocs(app);
});
app.use('/', elasticRouter);

export default app;
