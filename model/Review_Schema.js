const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
  },
  subject: {
    type: String,
    require: true,
  },
  review: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

reviewSchema.set("timestamps", true);
module.exports = mongoose.model("review", reviewSchema);
