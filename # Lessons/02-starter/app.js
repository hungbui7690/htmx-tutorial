/*
  1. create views/index.js
  2. use in app.js


*/

import express from 'express'
import createHomepageTemplate from './views/index.js'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(createHomepageTemplate()) // #
})

app.listen(5000, () => {
  console.log('🚀 Listening on port 5000...')
})
