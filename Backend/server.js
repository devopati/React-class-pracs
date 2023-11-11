const express = require('express')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const app = express()
const routeUrls = require("./Routes/route")
const cors = require("cors")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use("/app", routeUrls)

mongoose.connect(process.env.MONGO_URI)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`server is connected on  port ${PORT}`))