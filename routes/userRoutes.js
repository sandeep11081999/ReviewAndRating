const express = require("express");
const router = express.Router();
const user = require("../controllers/userControllers");
const validation = require("../validation/users/user_validation");
 const Userauth=require('../middlewares/auth_middleware')
const { upload } = require("../middlewares/imageStorage");

router.post(
  "/register",
  upload.single("profile_pic"),
  validation.registerUserValidation,
  
  user.userSignup
);
// router.get('/sendMail', user.sendMail)
router.post("/Login", validation.loginUserValidation, user.userLogin);

router.post("/send-reset-password-email", user.sendUserResetPasswordEmail);
router.post("/reset-password/:id/:token", user.userPasswordReset);
module.exports = router;
