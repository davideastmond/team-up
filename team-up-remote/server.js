const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

const { MongoClient } = require('mongodb');
const MONGODB_URI = 'mongodb://localhost:27017/test';
const dbName = 'test2';

app.use(cors({ origin: 'http://localhost:3000' }));

MongoClient.connect(MONGODB_URI, (err, db) =>
  {
    if (err)
    {
      console.error(`Failed to connect: ${MONGODB_URI}`);
      throw err;
    }

    const teamUp = db.db(dbName).collection('example');

    app.post('/test', (req, res) =>
    {
      console.log("MESSAGE RECEIVED");
      console.log(req.body);
      //teamUp.insertOne({ value: req.body });
      res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
    });

    app.listen(PORT, () =>
      {
        console.log(`Now listening on port ${PORT}!`)
      });
  }
);