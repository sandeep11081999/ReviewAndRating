const multer = require("multer");
const path = require("path");

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log("file", file);
    console.log(path.join(__dirname, "..", "/uploads/"));
    callback(null, path.join(__dirname, "..", "/uploads/"));
  },
  filename: (req, file, callback) => {
    var ext = file.originalname.substring(file.originalname.indexOf("."));
    callback(null, `image_${Date.now()}.${file.originalname}`);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only images is allowd"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

module.exports = {
  upload,
};
