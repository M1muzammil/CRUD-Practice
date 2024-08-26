import express from 'express';
import path from 'path';
import cors from 'cors';
import authRouter from './api/routes/auth/auth.mjs'

const app = express();
const __dirname = path.resolve();

// import apiv1router from './apiv1/main.mjs'
const port = 3001

app.use(cors({
    origin: ['http://localhost:3000', 'http://your-allowed-domain.com'],
  }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})