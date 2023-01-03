var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "narendracharan25753@gmail.com",
    pass: "wlrvoxredempejek",
  },
});

var mailOptions = {
  from: "narendracharan25753@gmail.com",
  to: "arun.lal@graffersid.com",
  subject: "Hye this is test mail",
  text: "A task in  5 clock ",
};

module.exports = {
  transporter,
  mailOptions,
};
