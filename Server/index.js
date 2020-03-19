require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

const app = express()
app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
  app.set('db', dbInstance)
}).catch(err => console.log('ERROR', err))

app.listen(SERVER_PORT, () => {
  console.log(`Server port is over ${SERVER_PORT}!`)
})

app.get('/api/inventory', ctrl.getProducts)
app.post('/api/product', ctrl.createProduct)
// app.post('/api/product/:id', ctrl.editProduct)