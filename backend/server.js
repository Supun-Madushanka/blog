require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const commentRoutes = require('./routes/commentRoutes')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())

app.use(cookieParser())

app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/post', postRoutes)
app.use('/comment', commentRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})