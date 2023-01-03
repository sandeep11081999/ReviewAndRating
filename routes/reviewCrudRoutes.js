const express = require("express");
const router = express.Router();
const validation = require("../validation/reviewCrud/reviewCrudValidation");
const Review = require("../controllers/reviewCrudContolers");

router.post("/create", validation.crudReviewValidation, Review.reviewCreate);
router.get("/retrive/:id", Review.reviewRetrive);
router.patch(
  "/update/:id",
  validation.crudReviewValidation,
  Review.reviewUpdate
);
router.delete("/delet/:id", Review.reviewDelet);

module.exports = router;
