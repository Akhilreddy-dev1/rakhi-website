const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/message', (req, res) => {
  res.json({ message: 'Happy Rakhi With Love from Backend!' });
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT);
});