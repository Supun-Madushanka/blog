const express = require('express')
const verifyToken = require('../utils/verifyUser')
const { create } = require('../controllers/postController')

const router = express.Router()

router.post('/create', verifyToken, create)

module.exports = router