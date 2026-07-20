import express from "express";

const port = 8000;
const app = express();

app.listen(port);

app.get('/', function(req, res) {
  res.send('hello, world')
})
