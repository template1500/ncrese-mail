const nodemailer = require('nodemailer')

const { config } = require('../config/config')

class MailService {
  async sendMail(infoName, infoMail, infoPhone, infoMessage) {
    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      secure: false,
      port: 587,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword
      }
    })

    await transporter.sendMail({
      from: infoMail,
      to: config.smtpEmail,
      bcc: config.smtpBcc,
      subject: `${infoName} - Desde ${config.domain}`,
      text: 
      `Nombre: ${infoName}
      Teléfono: ${infoPhone}
      Mensaje: ${infoMessage}
      Correo: ${infoMail}`
    })
    return { message: 'mail sent' }
  }
}

module.exports = MailService
