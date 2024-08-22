require('dotenv').config()
const express = require('express')
const path = require('path');
const hbs = require('hbs')
const userRoute = require('./routes/userRoute')
require('./DB/db')
const multerConfig = require('./middlewares/multerMiddleware')

const app = express()
const port = 4000
app.use(express.json())
// app.use(userRoute)
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

app.use('/',userRoute)
app.set('view engine','hbs')
app.set('views',__dirname+'/views')



app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('form',{value:'arun'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 