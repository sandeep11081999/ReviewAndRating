const bcrypt = require("bcrypt");
const User = require("../model/User_Schema");
const userSchema = require("../model/User_Schema");
const { transporter, mailOptions } = require("../service/mailService");
const cron = require("node-cron");
const jwt = require("jsonwebtoken");

const userSignup = async (req, res) => {
  const { user_email, password } = req.body;
  const userdata = new userSchema(req.body);
  console.log(req.body);
  try {
    const userExits = await User.findOne({ user_email: req.body.user_email });
    if (userExits) {
      return res.status(400).json({ status: 400, error: "Email aleady exit" });
    }
    const salt = await bcrypt.genSalt(10);
    userdata.password = await bcrypt.hash(password, salt);

    const filepath = `/uploads/${req.file.filename}`;
    userdata.profile_pic = filepath;

    const addData = await userdata.save();
    res.json(addData);
  } catch (err) {
    res.send("Error" + err);
  }
};

const userLogin = async (req, res) => {
  try {
    const { user_email, password } = req.body;
    if (user_email && password) {
      const user = await User.findOne({ user_email: user_email });
      if (user != null) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (user.user_email == user_email && isMatch) {
          const token = jwt.sign(
            { userID: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "30d" }
          );
          res.send({
            status: "Success",
            message: "Login Success",
            token: token,
          });
        } else {
          res.send({
            status: "failed",
            message: "Email or Password is not valid",
          });
        }
      } else {
        res.send({ status: "failed", message: "you are not register user" });
      }
    }
  } catch (err) {
    res.send("error" + err);
  }
};

const sendUserResetPasswordEmail = async (req, res) => {
  const { user_email } = req.body;
  const user = await User.findOne({ user_email: user_email });
  if (user) {
    const secret = user._id + process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ userID: user._id }, secret, { expiresIn: "30d" });

    console.log(token);
    console.log(user._id);
    const link = `http://127.0.0.1:3000/api/user/reset${user._id}/${token}}`;
    console.log("link", link);

    let info = await transporter.sendMail({
      from: "narendracharan2575@gmail.com",
      to: user_email,
      subject: "password reset link",
      text: `<a href=${link}></a>`,
    });
    res.send({
      status: "success",
      message: "please check your mail",
      info,
    });
  } else {
    res.send({ status: "failed", message: "Email is required" });
  }
};

const userPasswordReset = async (req, res) => {
  const { password, confirm_password } = req.body;
  const { id, token } = req.params;
  const user = await User.findById(id);
  console.log("====>", user);
  const new_secret = user._id + process.env.JWT_SECRET_KEY;
  try {
    jwt.verify(token, new_secret);
    if (password && confirm_password) {
      if (password != confirm_password) {
        res.send({
          status: "failed",
          message: "Password and conform password not should be same",
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const new_password = await bcrypt.hash(password, salt);
        await User.findByIdAndUpdate(user._id, {
          $set: { password: new_password },
        });
        res.send({
          success: "Succcess",
          message: "password Reset Succesfully",
        });
      }
    } else {
      res.send({ status: "failed", message: "All feilds are required" });
    }
  } catch (err) {
    res.send("error" + err);
  }
};

const sendMail = async (req, res) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email Sent succesfully" + info.response);
    }
  });
};

cron.schedule(" 0 17 * * *", () => {
  console.log("running  a task at  5 clock ");
  sendMail();
});

module.exports = {
  userSignup,
  sendMail,
  userLogin,
  sendUserResetPasswordEmail,
  userPasswordReset,
};
