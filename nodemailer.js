const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'senderEmail@gmail.com',
        pass: 'yourEmailPassword'
    }
});

const mailOptions = {
    from: 'SenderEmail',
    to: 'reciever Email',
    subject: 'Number of request to Jsonplaceholder Api'
};

module.exports = {
    transporter,
    mailOptions
}