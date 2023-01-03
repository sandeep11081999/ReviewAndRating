const joi = require("@hapi/joi");
const objectId = require("joi-objectid")(joi);

const schema = {
  crudReview: joi
    .object({
      subject: joi.string().max(50).min(5).required(),
      review: joi.string().max(50).min(2).required(),
      rating: joi.number().integer().max(5).min(2).required(),
      user_id: joi.objectId().required(),
      company_id: joi.objectId().required(),
    })
    .unknown(true),
};

module.exports = schema;
