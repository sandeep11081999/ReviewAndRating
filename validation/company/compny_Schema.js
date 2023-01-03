const joi = require("@hapi/joi");
joi.objectId = require("joi-objectid")(joi);

const companyValSchema = {
  registerCompany: joi
    .object({
      company_name: joi.string().max(20).required(),
      location: joi.string().required(),
      city: joi.string().required(),
      founded_on: joi.string().required(),
      user_id:joi.objectId().required()
    })
    .unknown(true),

  registerReview: joi
    .object({
      subject: joi.string().max(50).min(5).required(),
      review: joi.string().max(50).min(10).required(),
      rating: joi.number().max(5).min(1).required(),
      user: joi.objectId().required(),
      company_id: joi.objectId().required(),
    })
    .unknown(true),
};

module.exports = companyValSchema;
