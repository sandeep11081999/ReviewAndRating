const express = require("express");
const router = express.Router();
const userRouter = require("./userRoutes");
const companyRouter = require("./companyRoutes");
const reviewRouter = require("./reviewCrudRoutes");

router.use("/user", userRouter);
router.use("/company", companyRouter);
router.use("/reviewCrud", reviewRouter);

module.exports = router;
