import  path  from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

//if the database is connect then connects with the API
mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json()); //enabling the express to use json on DB
    app.use(router);

    const port = 3001;
    app.listen(port, ()=>{
      console.log(`The server is running on https://localhost:${port}`);
    });

  })
  .catch(()=> console.log('error'));



