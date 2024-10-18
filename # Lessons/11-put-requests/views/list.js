import BOOKS_DATA from '../data.js'
import createBookTemplate from './book.js'

const createListTemplate = () => /*html*/ `
  <ul>
    ${BOOKS_DATA.map((book) => createBookTemplate(book)).join('')}
  </ul>
`

export default createListTemplate
