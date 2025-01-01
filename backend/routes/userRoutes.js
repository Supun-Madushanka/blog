const express = require('express')
const { updateUser, deleteUser, signout, getUsers, getUser } = require('../controllers/userControllers')
const verifyToken = require('../utils/verifyUser')

const router = express.Router()

router.put('/update/:userId',verifyToken, updateUser)
router.delete('/delete/:userId', verifyToken, deleteUser)
router.post('/signout', signout)
router.get('/getUsers', verifyToken, getUsers)
router.get('/:userId', getUser)

module.exports = router