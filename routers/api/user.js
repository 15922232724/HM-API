
const express = require('express');
const router = express.Router();
const User = require('../../models/User')
const db = require('../../server')
router.get('/test', (req, res) => {
  res.json({ msg: 'ss' })
})
router.get('/login', (req, respond) => {
  User.findOne({ name: req.query.name }).then(res => {
    if (res) {
      if (res.password === req.query.password) {
        console.log(req.password, req.query.password, 1)
        respond.json({
          status: 200,
          message: '登录成功，欢迎使用！',
          data: res
        })
      } else {
        respond.json({
          status: 500,
          message: '登录失败，密码错误！',
          data: 'error'
        })
      }
    } else {
      respond.json({
        status: 500,
        message: '登录失败，用户名不存在！',
        data: 'error'
      })
    }
  })

})
router.get('/userInfo', (req, respond) => {
  console.log(req)
  User.findOne({ name: req.query.name }).then(res => {
    respond.json(res)
  })
})

router.post('/register', (req, respond) => {
  const newUser = new User(req.body)
  newUser.save().then(res => {
    respond.json({
      status: 200,
      message: '注册成功，请登录！',
      data: res
    })
  }).catch(err => {
    respond.json({
      status: 500,
      message: '注册失败,用户名已存在'
    })

  })
})
router.post('/userUpate', (req, respond) => {
  User.update({ name: req.body.name }, { $set: req.body }).then(res => {
    console.log(res)

    User.findOne({ name: req.body.name }).then(res => {
      respond.json(res)
    })
  })
})
module.exports = router;