nodemailer = require('nodemailer')

/**
 * common module to send email by smtp details.
 * @param {email_to,bcc,cc} body 
 * @param {content to be send} content 
 * @param {subject of the email} subject 
 */
var sendemail = (body, callback) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sahil.codebrew@gmail.com',

            pass: 'Raags#786',
        }
    });
    var mailOptions = {
        from: "sahil.codebrew@gmail.com",
        to: body.email,
        subject: body.subject,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
        callback(error);
        } else {
            // console.log('check result email',info)
            callback(null,info);
        }
    });
}

/**
 * logging common function
 * @param {message to print} msg 
 */
// function log(msg) {
//     //if ENV production then off the console.log
//     console.log(msg);
// };

module.exports = {
    sendemail: sendemail,
    // log: log
}