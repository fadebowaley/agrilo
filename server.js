const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const RECAPTCHA_SECRET = '6LeX1ZQrAAAAAFbvuM1EzqQeMk8rAs_e5wgMjgwf'; // Your new secret key

app.post('/api/submit-form', async (req, res) => {
  const { recaptchaToken, ...formData } = req.body;

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`
    );
    if (response.data.success) {
      // reCAPTCHA passed, process form data
      // ...handle formData...
      return res.json({ success: true, message: 'Form submitted successfully!' });
    } else {
      return res.status(400).json({ success: false, message: 'reCAPTCHA failed.' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});