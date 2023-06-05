import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import router from './routes/task.js';
import connectionString from './db/connect.js';
import notFound from './middleware/not-found.js';
import errorHandlerMiddleware from './model/error-handler.js';

app.use(express.json());
app.use('/api/v1/tasks', router);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, async (req, res) => {
  await connectionString();
  console.log(`Server is listening on ${port}...`);
});

app.get('/', (req, res) => {
  res.render('index');
});
