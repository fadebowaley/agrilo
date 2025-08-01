const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const RECAPTCHA_SECRET = '6LcNz5UrAAAAAKtLKtzJdgKkgCRuy34BcAgZIzEB';

app.post('/api/send-message', async (req, res) => {
  const { recaptchaToken, name, email, subject, message } = req.body;

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`
    );
    if (response.data.success && response.data.score > 0.5) {
      // reCAPTCHA passed, process form data
      // ...handle name, email, subject, message...
      return res.json({ success: true, message: 'Message sent successfully!' });
    } else {
      return res.status(400).json({ success: false, message: 'reCAPTCHA failed or score too low.' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});