const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  GOOGLE_CALENDAR_API_KEY: process.env.GOOGLE_CALENDAR_API_KEY,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS
};
