const express = require('express');
const route = express.Router()
const userController = require('../Controller/userController')
const upload = require('../middlewares/multerMiddleware');

route.get('/',userController.showForm)

route.post('/form-upload',upload.single('photo'),userController.saveData)
route.get('/image/:id',userController.getImage)
module.exports = route  