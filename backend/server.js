const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'https://localhost:8081'
}




// middlewares
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true}))






// --------routers-------------
const router = require('./routes/customerRouter.js')
 app.use('/api/customers', router) //this is where i dont't know how he got the api , please i need help








// testing api
app.get('/', (req, res) => {
    res.json({ message: 'hello from api'})
})


// Port
const PORT = process.env.PORT || 8080

// server
app.listen( PORT, () => {
    console.log(`server is running on port ${PORT}`)
})