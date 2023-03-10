const jwt = require("jsonwebtoken");
const User = require("../model/User_Schema");

const checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      //Get token from Header
      token = authorization.split("")[1];
      //check token and authorization
      console.log("token", token);
      console.log("Authorization:", authorization);
      //verify token
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Get User from Token
      req.user = await User.findById(userID).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send({ status: "Failed", message: "Unauthorized User" });
    }
  }
  if (!token) {
    res.status(401).send({ message: "Unauthorized User NO TOken" });
  }
};

module.exports = {checkUserAuth}
