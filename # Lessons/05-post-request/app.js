/*
  Post Requests
  1. views/index.js
  2. app.js


  🌲 We need to click on the button first -> fetch data to render the <ul> -> then add the new Book


*/

import express from 'express'
import createHomepageTemplate from './views/index.js'
import createListTemplate from './views/list.js'
import BOOKS_DATA from './data.js'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(createHomepageTemplate())
})

app.get('/books', (req, res) => {
  res.send(createListTemplate())
})

// 2.
app.post('/books', (req, res) => {
  const { title, author } = req.body
  const id = Math.random().toString()

  BOOKS_DATA.push({ id, title, author })

  res.send(`<li>${title}, ${author}</li>`)
})

app.listen(5000, () => {
  console.log('🚀 Listening on port 5000...')
})
