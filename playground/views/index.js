/*
  Swapping Content



*/

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
        <!-- 1. -->
        <div class="search" style="text-align: center;">
          <input 
            type="search"
            name="search"
            placeholder="Search books by title..."
            hx-post="/books/search"
            hx-trigger="keyup changed delay:300ms"
            hx-target=".book-list"
          />
        </div> 

        <div class="book-list">
          <button hx-get="/books" hx-target=".book-list" hx-trigger="dblclick">Show Books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form  
              hx-on:click="console.log('new book added', event)"
              hx-on::after-request="document.querySelector('form').reset()"
              hx-post="/books" hx-target=".book-list ul" hx-swap="beforeend">
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
            <button>
              Add
            </button>
          </form>
        </div>
      </main>
    </body>
  </html>
`

export default createHomepageTemplate
