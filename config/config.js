require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
  domain: process.env.DOMAIN,
  smtpEmail: process.env.SMTP_EMAIL,
  smtpPassword: process.env.SMTP_PASSWORD,
  smtpHost: process.env.SMTP_HOST,
  smtpBcc: process.env.SMTP_BCC || ''
}

module.exports = { config }
