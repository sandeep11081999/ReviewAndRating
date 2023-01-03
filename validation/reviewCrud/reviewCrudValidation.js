const review = require("./reviewCrudSchema");

module.exports = {

  crudReviewValidation : async (req, res, next) => {
    const value = await review.crudReview.validate(req.body, {
      abortEarly : false,
    });
    if (value.error) { 
      res.json({
        status : 0,
        message : value.error.details[0].message,
      });
    } else {
      next();
    }
  }, 
};
