const { promisify } = require("es6-promisify");
const nodemailer = require("nodemailer");
require("dotenv/config");

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.sendVerification = async (options) => {
  const mailOptions = {
    from: "LinkPocket Support <support@linkpocket.com>",
    to: options.email,
    subject: "Welcome to LinkPocket",
    html: `Welcome to LinkPocket! Please click the link below to verify your email address:<br><br><a href='${process.env.UI_URL}/verify/${options.token}'>Verify Email</a>`,
  };
  try {
    const sendMail = await promisify(transport.sendMail.bind(transport));
    return sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
