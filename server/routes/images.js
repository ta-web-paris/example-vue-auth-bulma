const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'my-images',
  allowedFormats: ['jpg', 'png', 'gif'],
});

const parser = multer({ storage });

router.post('/upload', parser.single('picture'), (req, res, next) => {
  // should contain myMessage: 'Hello'
  console.log(req.body);
  // This is the uploaded file to cloudinary
  res.json(req.file);
});

module.exports = router;
