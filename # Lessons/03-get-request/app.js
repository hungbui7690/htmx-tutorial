/*
  Get Request
  - hx-get


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  1. views/index.js + list.js + book.js
    -> click on button -> send request to /books 
  2. app.js


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  🚀 the ui will looks weird -> because data is rendered inside the button


*/

import express from 'express'
import createHomepageTemplate from './views/index.js'
import createListTemplate from './views/list.js'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(createHomepageTemplate())
})

// 2.
app.get('/books', (req, res) => {
  res.send(createListTemplate())
})

app.listen(5000, () => {
  console.log('🚀 Listening on port 5000...')
})
