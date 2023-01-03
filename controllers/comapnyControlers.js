const companySchema = require("../model/Company_Schema");
const reviewSchema = require("../model/Review_Schema");

const createCompany = async (req, res) => {
  const comapnyData = new companySchema(req.body);
  try {
    const filepath = `/uploads/${req.file.filename}`;
    comapnyData.company_logo = filepath;
    const comapanyExit = await companySchema.findOne({
      company_name: req.body.company_name,
    });
    if (comapanyExit) {
      return res
        .status(400)
        .json({ status: 400, error: "company already exited" });
    }
    const addData = await comapnyData.save();
    res.json({
      staus: 0,
      message: "register Succesfully",
    });
  } catch (err) {
    res.send("error" + err);
  }
};

const companyListing = async (req, res) => {
  try {
    const companyList = await companySchema.find();
    const count = await companySchema.count();
    res.send({
      status: 0,
      "total Company": count,
      companyList,
    });
  } catch (err) {
    res.send({
      status: 400,
      message: "data not found" + err,
    });
  }
};

const registerReview = async (req, res) => {
  const reviewData = new reviewSchema(req.body);
  try {
    const Data = await reviewData.save();
    res.send({
      status: 0,
      message: "add successfully",
    });
  } catch (err) {
    res.send("error" + err);
  }
};

const companyReviewComment = async (req, res) => {
  let id = req.params.id;
  try {
    const companyDetail = await companySchema.findById(id).lean();
    const comment = await reviewSchema
      .find({ 'company_id': `${id}` })
      .populate({
        path: "user_id",
        select: "user_name profile_pic",
      })
      .populate({ path: "company_id", select: "_id" });
      console.log('====>',comment);
    var data = {
      companyDetail: companyDetail,
      comment: comment,
    };
    res.json({
      status: 0,
      message: "add comment successfully",
      data,
    });
  } catch (err) {
    res.send("error" + err);
  }
};

module.exports = {
  createCompany,
  companyListing,
  registerReview,
  companyReviewComment,
};
