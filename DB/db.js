const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/image-saver').then(()=>{
    console.log('mongodb connection successfull')
}).catch((err)=>{
    console.log('err connecting to mongodb')
    console.log(err)
})

module.exports = mongoose 

// const connectDB=async()=>{
//     mongoose.connect('mongodb://localhost:27017/image-saver').then(()=>{
//         console.log('mongodb connection successfull')
//     }).catch((err)=>{
//         console.log('err connectiong to mongodb')
//         console.log(err)
//     })
// }