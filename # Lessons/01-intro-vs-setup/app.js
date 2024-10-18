/*
  Intro
  - alternative to React, Vue...
  - for making dynamic web apps
  - using a <Hypermedia> approach
  

\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Hypermedia Controls
  - <a> 
  - <form>
  - when we click on a link, or submit a form -> send request to server -> get HTML from server -> render HTML to DOM
  - with HTMX -> any HTML element can be Hypermedia


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Setup
  - npm init -y
  - npm i express
  - Extension: Inline HTML


*/

import express from 'express'
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send()
})

app.listen(5000, () => {
  console.log('App listening on port 3000')
})
