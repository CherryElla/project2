const multer = require("multer")
const path = require("path")
const fs = require("fs")
// Multer is a middleware for handling multipart/form data, for file uploads

// Creating a function that checks for specified file and mime types and ext names
const fileTypeChecker = function (file, callback) {
    // File extentions to allow
    const fileTypes = /jpg|jpeg|gif|png|svg/
    // Extention name check
    const extenName = fileTypes.test(path.extname(file.originalname).toLowerCase())
    // Mimetype check
    const mimetype = fileTypes.test(file.mimetype)

    if (mimetype && extenName) {
        return callback(null, true);
    } else {
        callback("Only images can be uploaded!")
    }
}

// Instantiating multers storageengine obj with options - 
// Telling engine to save images in this dir and telling engine images new file name
const storageEngineObject = multer.diskStorage({
    destination: (req, file, callback) => {
        let targetDir = path.resolve(__dirname, "../public/uploads/images")
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true })
        }
        callback(null, targetDir)
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}--woofr--${file.originalname.toLowerCase()}`)
    }
});

// Using Multer object to build object with file size limit and filetype()
const uploadImage = multer({
    storage: storageEngineObject,
    limits: { fileSize: 10000000},
    fileFilter: (req, file, callback) => {
        fileTypeChecker(file, callback)
    }
});

module.exports = uploadImage
