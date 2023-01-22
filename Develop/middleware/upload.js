const multer = require("multer")
const util = require("util")
const path = require("path")



const fileTypeChecker = function (file, callback) {
    // File extentions to allow
    const fileTypes = /jpg|jpeg|gif|png|svg/

    // Extention name check
    const extenName = fileTypes.test(path.extname(file.originalname).toLowerCase())

    const mimetype = fileTypes.test(file.mimetype)

    if (mimetype && extenName) {
        return callback(null, true);
    } else {
        callback("Only images can be uploaded!")
    }
}

const storageEngine = multer.diskStorage({
    destination: (req, file, callback) => {
        let targetDir = path.resolve(__dirname, "../public/uploads/images")
        callback(null, targetDir)
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}--woofr--${file.originalname.toLowerCase()}`)
    }
});

const uploadImage = multer({
    storage: storageEngine,
    limits: { fileSize: 10000000},
    fileFilter: (req, file, callback) => {
        fileTypeChecker(file, callback)
    }
}).any()

module.exports = util.promisify(uploadImage)
