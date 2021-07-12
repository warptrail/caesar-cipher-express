const express = require('express');
const morgan = require('morgan');

const { caesarCipher } = require('./cipher');

// Transform and Roll Out

const app = express();
app.use(morgan('common'));

// cipher endpoint
app.get('/encrypt', (req, res) => {
  // get query parameters as variables
  const { text, shift } = req.query;

  // validation
  if (!text) {
    return res.status(400).send('text is required');
  }
  if (!shift) {
    return res.status(400).send('shift is required');
  }
  const numShift = parseFloat(shift);

  // import cipher function
  const cipherEncrypted = caesarCipher(text, numShift, true); // true for encryption

  // return the cipher as response
  res.status(200).send(cipherEncrypted);
});

// Do it in reverse
app.get('/decrypt', (req, res) => {
  // same validation
  const { text, shift } = req.query;

  // validation
  if (!text) {
    return res.status(400).send('text is required');
  }
  if (!shift) {
    return res.status(400).send('shift is required');
  }
  const numShift = parseFloat(shift);

  // import cipher function
  const cipherDecrypted = caesarCipher(text, numShift, false); // false for decryption

  res.status(200).send(cipherDecrypted);
});

app.listen(8000, () => {
  console.log('Server running on PORT 8000');
});
