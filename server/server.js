const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('./config') //connection establish
mongoose.set('strictQuery', false)
const userModel = require('./models/userSchema')
const scoreModel = require('./models/scoreSchema')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/create', async (req, res) => {
  const { password, phone_no } = req.body
  if (phone_no) {
    let data = await userModel.findOne({ phone_no: phone_no })
    if (data) {
      console.log(data)
      return res.status(200).json({ status: true, data: data })
    }
    let newUser = new userModel({
      phone_no: phone_no,
      password: password
    }).save(function (err, result) {
      if (err) {
        console.log(err)
      }
      return res.status(200).json({ status: true, data: result })
    })
  }
})
app.post('/score', async (req, res) => {
  try {
    const { score, phone_no } = req.body
    if (phone_no) {
      new scoreModel({
        phone_no: phone_no,
        score: score
      }).save((err, result) => {
        if(err){
          res.status(400).json({ status: false, message: 'Some error occured.' })
        }
        res.status(200).json({ status: true, data: result})
      })
    } else {
      res.status(400).json({ status: false, message: 'Invalid phone number' })
    }
  } catch (error) {}
})

app.listen(4000, () => {
  console.log('started on port 4000')
})
