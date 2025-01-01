const express = require('express')
const verifyToken = require('../utils/verifyUser')
const { createComment } = require('../controllers/commentControllers')

const router = express.Router()

router.post('/create', verifyToken, createComment)

module.exports = router