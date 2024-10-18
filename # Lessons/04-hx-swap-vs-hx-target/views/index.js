/*
  hx-swap
  - <button hx-get="/books">Show Books</button> 
    -> when we click on button -> data will be render inside the button -> hx-swap="innerHTML" -> default value
    -> we can change to: hx-swap="outerHTML"
  - <button hx-get="/books" hx-swap="innerHTML" hx-target=".book-list">
  - <button hx-get="/books" hx-swap="afterend" hx-target=".book-list">

  1. views/index.js


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  hx-target
  - hx-swap="beforeend" hx-target=".book-list" -> beforeend of .book-list
  - hx-swap="afterend" hx-target=".book-list" -> after of .book-list
  - hx-swap="innerHTML" hx-target=".book-list" -> innerHTML of .book-list
  - hx-target="closet div" -> closet parent div


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  - div.book-list
      # innerHTML
      <button hx-get="/books" hx-swap="beforeend" hx-target=".book-list">Show Books</button>
      # beforeend
    div
    # afterend

  - div.book-list
      <button hx-get="/books" hx-target="closest div">Show Books</button>
    div
    -> close parent which is div



*/

const createHomepageTemplate = () => /*html*/ `
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <!-- #innerHTML -->
          
          <!-- 1. -->
          <!-- <button hx-get="/books" hx-swap="outerHTML">Show Books</button> -->

          <!-- 2. -->
          <!-- <button hx-get="/books" hx-swap="beforeend" hx-target=".book-list">Show Books</button> -->

          <!-- 3. -->
          <!-- <button hx-get="/books" hx-target=".book-list">Show Books</button> -->

          <!-- 4. -->
          <button hx-get="/books"  hx-target="closest div">Show Books</button>

          <!-- #beforeend -->
        </div>
        <!-- #afterend -->

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <!-- form template here later -->
        </div>
      </main>
    </body>
  </html>
`

export default createHomepageTemplate
