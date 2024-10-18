/*
  DELETE Requests
  1. views/book.js
  2. app.js

  <button
    hx-delete="/books/${book.id}" 
    hx-target="closest li" 
    hx-swap="outerHTML"
    >Delete
  </button>
  -> without hx-swap & hx-target -> it it just remove the text of the button -> because by default, hx-swap=innerHTML
  -> outerHTML -> it will remove the whole li element, not just the button



*/

import express from 'express'
import createHomepageTemplate from './views/index.js'
import createListTemplate from './views/list.js'
import createBookTemplate from './views/book.js'
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

app.post('/books', (req, res) => {
  const { title, author } = req.body
  const id = Math.random().toString()

  BOOKS_DATA.push({ id, title, author })

  res.redirect(`/books/${id}`)
})

app.get('/books/:id', (req, res) => {
  const { id } = req.params
  const book = BOOKS_DATA.find((b) => b.id === id)

  res.send(createBookTemplate(book))
})

// 2.
app.delete('/books/:id', (req, res) => {
  const idx = BOOKS_DATA.findIndex((b) => b.id === req.params.id)
  BOOKS_DATA.splice(idx, 1)

  res.send()
})

app.listen(5000, () => {
  console.log('🚀 Listening on port 5000...')
})
