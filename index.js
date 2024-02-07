const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')

const { config } = require('./config/config')
const { logError, boomErrorHandler, errorHandler } = require('./middleware/error.handler')

const app = express()
const port = config.port

app.use(express.json())

const whitelist = [`${config.domain}`]
const optionsCors ={
  origin: function(origin, callback){
    if(!origin || whitelist.indexOf(origin)!== -1){
      callback(null, true)
    } else {
      callback(new Error("No permitido"))
    }
  }
}

app.use(cors(optionsCors))

app.get('/', (req, res) => {
  res.send('Server Online')
})

routerApi(app)

app.use(logError)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  // console.log(`Mi port ${port}`);
})
