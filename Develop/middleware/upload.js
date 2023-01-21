const multer = require("multer")

const path = require("path")



const fileTypeChecker = function (file, callback) {
    // File extentions to allow
    const fileTypes = /jpg|jpeg|gif|png|svg/
    // Extention name check
    const extenName = fileTypes.test(path.extenName(file.originalname).toLowerCase())

    const mimetype = fileTypes.test(file.mimetype)

    if (mimetype && extenName) {
        return callback(null, true);
    } else {
        callback("Only images can be uploaded!")
    }
}

const storageEngine = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, __basedir + "/public/uploads/images/")
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}--woofr--${file.originalname}`)
    }
});

const uploadImage = multer({
    storage: storageEngine,
    limits: { fileSize: 10000000},
    fileFilter: (req, file, callback) => {
        fileTypeChecker(file, callback)
    }
})

module.exports = uploadImage
