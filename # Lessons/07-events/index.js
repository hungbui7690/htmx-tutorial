/*
  Events & hx-on
  - <button 
      hx-on:click="console.log('new book added', event)"
      hx-on:htmx:after-request="document.querySelector('form').reset()"
      hx-post="/books" hx-target=".book-list ul" hx-swap="beforeend">
      Add
    </button>

  - hx-on:htmx:after-request
  - hx-on::after-request
    => these are similar


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
        <div class="book-list">
          <button hx-get="/books" hx-target=".book-list">Show Books</button>
        </div>

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
            <button 
              hx-on:click="console.log('new book added', event)"
              hx-on::after-request="document.querySelector('form').reset()"
              hx-post="/books" hx-target=".book-list ul" hx-swap="beforeend">
              Add
            </button>
          </form>
        </div>
      </main>
    </body>
  </html>
`

export default createHomepageTemplate