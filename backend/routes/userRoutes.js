const express = require('express')
const { updateUser, deleteUser, signout } = require('../controllers/userControllers')
const verifyToken = require('../utils/verifyUser')

const router = express.Router()

router.put('/update/:userId',verifyToken, updateUser)
router.delete('/delete/:userId', verifyToken, deleteUser)
router.post('/signout', signout)

module.exports = router