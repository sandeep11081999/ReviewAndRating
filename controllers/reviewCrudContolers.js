const crudSchema = require("../model/Review_Schema");

const reviewCreate = async (req, res) => {
  const crudData = new crudSchema(req.body);
  try {
    const addReview = await crudData.save();
    res.send({
      status : 201,
      message: "Add Review Successfully",
    });
  } catch (err) {
    res.send("error" + err);
  }
};

const reviewRetrive = async (req, res) => {
  const reviewId = req.params.id;
  try {
    const getRetrive = await crudSchema.find(
      { company_id: `${reviewId}` },
      { subject: 1, rating: 1, review: 1, _id: 0 }
    );
    res.send({
      status:200,
      getRetrive,
      message : "find data successfully"
    });
  } catch (err) {
    res.send("error" + err);
  }
};

const reviewUpdate = async (req, res) => {
  const id = req.params.id;
  try {
    const update = req.body;
    const option = {new : true}
    const result = await crudSchema.findByIdAndUpdate(id, update ,option);
    res.json(result);
  } catch (err) {
    res.send("error" + err);
  }
};

const reviewDelet = async (req, res) => {
  await crudSchema.findByIdAndDelete(req.params.id);
  res.send(" delete Review successfully");
  try {
    res.status(204).send().json({
      status: "success",
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};

module.exports = {
  reviewCreate,
  reviewRetrive,
  reviewUpdate,
  reviewDelet,
};
