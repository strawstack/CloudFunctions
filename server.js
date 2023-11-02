const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Successful response 1.');
});

app.get('/test', (req, res) => {
  res.send('Test response.');
});

// Use port 8080 by default, unless configured differently in Google Cloud
const port = process.env.PORT || 8080;
app.listen(port, () => {
   console.log(`App is running at: http://localhost:${port}`);
});