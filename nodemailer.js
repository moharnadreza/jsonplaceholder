const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'sender@gmail.com',
    pass: 'senderPassword'
  }
})

const mailOptions = {
  from: 'sender@gmail.com',
  to: 'receiver@gmail.com',
  subject: 'Number of request to Jsonplaceholder Api'
}

module.exports = {
  transporter,
  mailOptions
}
