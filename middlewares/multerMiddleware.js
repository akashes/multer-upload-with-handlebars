// const multer = require('multer')
// console.log('inside multer');

// //to store multer data
// const storage = multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,'./uploads')
//     },
//     //create a new file name for images
//     filename:(req,file,callback)=>{
//         const filename=`image-${Date.now()}-${file.originalname}`
//         callback(null,filename)
//     }
// })

// //filter
// const fileFilter = (req,file,callback)=>{
//     const allowedMimeTypes = ['image/png','image/jpeg','image/jpg']
//     if(allowedMimeTypes.includes(file.mimetype)){
//         callback(null,true)
//     }else{
//         // callback(null,false)
//         return callback(new Error("Invalid file type... must be image/png , image/jpeg or image/jpg"))
//     }
// }

// const multerConfig=multer(
//     {
//         storage,fileFilter
//     }
// )
// console.log('out of multer');
// module.exports = multerConfig


// const multer = require("multer");
// const path = require("node:path");

// const storageConfig = multer.diskStorage({
//     // destinations is uploads folder 
//     // under the project directory
//     destination: path.join(__dirname, "uploads"),
//     filename: (req, file, res) => {
//         // file name is prepended with current time
//         // in milliseconds to handle duplicate file names
//         res(null, Date.now() + "-" + file.originalname);
//     },
// });

// // file filter for filtering only images
// const fileFilterConfig = function(req, file, cb) {
//     if (file.mimetype === "image/jpeg"
//         || file.mimetype === "image/png") {
//         // calling callback with true
//         // as mimetype of file is image
//         cb(null, true);
//     } else {
//         // false to indicate not to store the file
//         cb(null, false);
//     }
// };

// // creating multer object for storing
// // with configuration
// const upload = multer({
//     // applying storage and file filter
//     storage: storageConfig,
//     limits: {
//         // limits file size to 5 MB
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilterConfig,
// });

// module.exports = upload;


// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

// module.exports = upload


const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure this path exists
  },
  filename: function (req, file, cb) {
    console.log(file)
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + ext);
  }
});

const upload = multer({ storage: storage });
 
module.exports = upload