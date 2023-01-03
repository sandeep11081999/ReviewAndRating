const express = require("express");
const router = express.Router();
const comapany = require("../controllers/comapnyControlers");
const { upload } = require("../middlewares/imageStorage");
const companyValidation = require("../validation/company/company_validation");
const companyList = require("../controllers/comapnyControlers");
const Review = require("../controllers/comapnyControlers");
const comment=require('../controllers/comapnyControlers')

router.post(
  "/create",
  upload.single("company_logo"),
  companyValidation.registerCompanyValidation,
  comapany.createCompany
);
router.get("/companylist", companyList.companyListing);
router.post(
  "/addReview",
  Review.registerReview,
  companyValidation.registerReviewValidation
);
router.post("/commentReview/:id",comment.companyReviewComment)

module.exports = router;
