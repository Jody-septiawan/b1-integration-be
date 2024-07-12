const express = require("express");
const { upload } = require("../../../helpers/uploadFile");
const { createUploadFile } = require("../../controllers/upload");

const router = express.Router();

router.post("/", upload.single("file"), createUploadFile);

module.exports = router;
