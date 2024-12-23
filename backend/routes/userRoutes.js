const express = require('express')
const { updateUser, deleteUser } = require('../controllers/userControllers')
const verifyToken = require('../utils/verifyUser')

const router = express.Router()

router.put('/update/:userId',verifyToken, updateUser)
router.delete('/delete/:userId', verifyToken, deleteUser)

module.exports = router