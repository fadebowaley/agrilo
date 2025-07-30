const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

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

const Welcome = () => {
  const [recaptchaToken, setRecaptchaToken] = React.useState('');

  const handleRecaptcha = (value) => {
    setRecaptchaToken(value);
  };

  return (
    <form className="space-y-4" /* onSubmit={handleSubmit} */>
      {/* ...other form fields... */}
      <div>
        <ReCAPTCHA
          sitekey="6LeX1ZQrAAAAAKH8l6nP2OSN-GdEynMcPt38RMSQ"
          onChange={handleRecaptcha}
        />
      </div>
      {/* ...submit button... */}
    </form>
  );
};

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

export default Welcome;
const axios = require('axios');
const RECAPTCHA_SECRET = 'YOUR_SECRET_KEY'; // Replace with your secret key

// In your Express route
const response = await axios.post(
  `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`
);
if (response.data.success) {
  // Passed
} else {
  // Failed
}