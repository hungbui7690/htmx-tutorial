import BOOKS_DATA from '../data.js'
import createBookTemplate from './book.js'

// 2. add param "book"
const createListTemplate = (books) => /*html*/ `
  <ul>
    <!-- change to "books" -->
    ${books.map((book) => createBookTemplate(book)).join('')}
  </ul>
`

export default createListTemplate
