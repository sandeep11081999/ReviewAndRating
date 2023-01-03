const joi = require("@hapi/joi");

const schema = {
  registerUser: joi
    .object({
      user_name: joi.string().max(20).required(),
      user_email: joi.string().email().required(),
      password: joi.string().max(6).required(),
      mobile_Num: joi
        .number()
        .integer()
        .min(1000000000)
        .max(9999999999)
        .message("Invalid mobile Number")
        .required(),
      city: joi.string().required(),
      state: joi.string().required(),
    })
    .unknown(true),

  loginUser: joi
    .object({
      user_email: joi.string().email().required(),
      password: joi.string().required(),
    })
    .unknown(true),
};

module.exports = schema;
