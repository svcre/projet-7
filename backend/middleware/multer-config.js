const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};



const storage = 
multer.diskStorage({
  
  destination: (req, file, callback) => {
    callback(null, 'images/tmp');
  }, 
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');

    // split retire les espaces et join les remplace par des _
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name.substring(0, 8) + '_' + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image');