require('dotenv').config() // чтобы .env мог считываться

const express = require('express')
const sequelize = require('./db.js')
const models = require('./models/models.js')
const fileUpload=require('express-fileupload')
const cors = require('cors')
const router = require('./routes/index')
const path=require('path')
const errorHandler = require('./middleware/ErrorHeandlingMiddleware')

let PORT = process.env.PORT || 4000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// обработка ошибок (последний middleware)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({massage: 'working'})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, (req, res) => console.log(`сервер запустился на ${PORT} порту`))
    } catch (e) {
        console.log(e);
    }
}

start()