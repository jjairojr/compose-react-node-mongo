import express from 'express';
import mongoose from 'mongoose';

import LoginModel from './models/LoginModel'

const app = express();

mongoose.connect(
  'mongodb://mongo:27017/docker-compose-dev',
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  }
).then(() => console.log("MongoDB conectado"));

app.get('/', async (req, res) => {
  res.send('Hello Docker 2222');
  await LoginModel.create({
    user: 'Docker',
    password: 'Compose'
  })
});

app.listen(3333, () => console.log("aplicação foi iniciada"));