const createHomepageTemplate = () => /*html*/ `
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <button hx-get="/books" hx-target=".book-list">Show Books</button>
        </div>

        <!-- 1. add form -->
        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form>
            <input 
              id="title" 
              name="title"
              placeholder="title" 
              type="text" 
            />
            <input 
              id="author" 
              name="author"
              placeholder="author" 
              type="text" 
            />
            <!-- hx-post -> post request  -->
            <!-- insert data to beforeend of .book-list ul -->
            <button hx-post="/books" hx-target=".book-list ul" hx-swap="beforeend">Add</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`

export default createHomepageTemplate
