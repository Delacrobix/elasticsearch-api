import '@babel/register';
import dotenv from 'dotenv';
import express from 'express';
import { json } from 'body-parser';

dotenv.config();

const { router } = require('./routes/index');
const app = express();

app.use(json());
app.use('/', router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

export default app;
