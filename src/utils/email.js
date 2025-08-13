const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS } = require('../config/env');

async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: EMAIL_USER,
    to,
    subject,
    text
  });
}

module.exports = sendEmail;
