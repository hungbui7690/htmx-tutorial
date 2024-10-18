/*
  PUT Requests
  1. edit.js
  2. app.js


*/

import express from 'express'
import createHomepageTemplate from './views/index.js'
import createListTemplate from './views/list.js'
import createBookTemplate from './views/book.js'
import createEditFormTemplate from './views/edit.js'
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

app.delete('/books/:id', (req, res) => {
  const idx = BOOKS_DATA.findIndex((b) => b.id === req.params.id)
  BOOKS_DATA.splice(idx, 1)

  res.send()
})

// 2.
app.put('/books/:id', (req, res) => {
  const { title, author } = req.body
  const { id } = req.params

  const newBook = { title, author, id }

  const idx = BOOKS_DATA.findIndex((b) => b.id === id)
  BOOKS_DATA[idx] = newBook

  res.send(createBookTemplate(newBook))
})

app.get('/books/edit/:id', (req, res) => {
  const book = BOOKS_DATA.find((b) => b.id === req.params.id)

  res.send(createEditFormTemplate(book))
})

app.listen(5000, () => {
  console.log('🚀 Listening on port 5000...')
})
