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

      <!-- 1. hx-get -->
      <main>
        <div class="book-list">
          <button hx-get="/books">Show Books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <!-- form template here later -->
        </div>
      </main>
    </body>
  </html>
`

export default createHomepageTemplate
