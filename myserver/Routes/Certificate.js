const express = require('express');
const router = express.Router();
const certificate_controller  = require('../Controllers/Certificate_controller');
const { Certificate } = require('crypto');
const multer = require('multer');


// storage background  images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'upload_img/background_img/');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
});


// storage canva images
const canva_storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload_img/image_canva/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});


// upload background image
const upload = multer({ storage: storage });

// upload canva image
const cimg_upload = multer({ storage:canva_storage });



// retrive image
router.post('/bimg',certificate_controller.background_img);
router.post('/cimg',certificate_controller.canva_img);

// insertion certificate background  image
router.post('/upload_img/background_img',upload.single('image'),certificate_controller.insert_bimg);

// insertion certificate canva image
router.post('/upload_img/image_canva',cimg_upload.single('image'),certificate_controller.insert_canva_img);

module.exports = router;