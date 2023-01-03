const company = require("./compny_Schema");
const Review = require("./compny_Schema");

module.exports = {
  registerCompanyValidation: async (req, res, next) => {
    const value = await company.registerCompany.validate(req.body, {
      abortEarly: false,
    });
    if (value.error) {
      res.json({
        success: 0,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
  registerReviewValidation: async (req, res, next) => {
    const value = await Review.registerReview.validate(req.body, {
      abortEarly: false,
    });
    if (value.error) {
      res.json({
        success: 0,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
