const express = require('express')
const cors=require('cors')
const bodyParser=('body-parser')
const router=require('./src/routes/api')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/api/v1',router)

module.exports=app