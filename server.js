const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/lodgings', (req, res, next) => {
  res.status(200).send("Hello world!");
});

app.listen(port, () => {
  console.log("== Server is listening on port:", port);
});
