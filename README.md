Project 1 - Full Stack Todo App 
-------------------------------

Using CSR
---------
```
Nodejs as runtime Environment 
+ 
PostgreSQL for Database 
    with Knex.js as ORM 
    and pg as database engine (Driver)
+ 
handlebars.js as templating Engine for Express
+ 
express.js for routing and rendering Pages
+ 
FrontEnd (Bootstrap)
+
Ajax Request for data request to API at server

```

Steps followed : 
----------------

  * Server Side Code

  1. Generated an Express-App using express Generator to quickly create an application skeleton [Wanna Learn that!](https://expressjs.com/en/starter/generator.html)

      ```
      $ npm install -g express-generator
      ```

  2. Adding a git ignore file and setting view engine to hbs 

      ```
      $ express --git --view=hbs  
      $ npm i

      ouptut: 
      ------
        $ npm install will add all :-
          "cookie-parser",
          "debug",
          "express",
          "hbs",
          "http-errors",
          "morgan"

      run the app:
        $ DEBUG=project1-full-stack-todo-app:* npm start
      ```

Migration and Seeding
--------------------
   [Must read](http://perkframework.com/v1/guides/database-migrations-knex.html) + [knex.js cheatsheet](https://devhints.io/knex):


  3. Created a database to store all the todos 
  
  ```
  $ createdb tododb 
    - create a db in postgresql
  
  $ yarn add knex pg

  $ knex init 
    - will generate a file named knexfile.js

  $ knex migrate:make todos 
    - create a migration file inside migration folder to define the structure of table. (see knexfile.js for example)

  $ knex migrate:latest 
   - creating table inside tododb

  $ knex seed:make todos
    - adding data to table

  $ knex seed:run 
    - Checking :
      - psql tododb 
      - \dt 
      - \d todos

    - Testing :
      - select * from todos
```
```
output :

 todoID |     title      |     description     | priority | done |             date              
--------+----------------+---------------------+----------+------+-------------------------------
      1 | First CRUD APP | FULL STACK PROJECT  |        1 | f    | 2019-08-06 19:33:52.255+05:30
      2 | Test Todo 2    | Test 2              |        2 | f    | 2019-08-06 19:33:52.255+05:30
      3 | Test Todo 3    | Test 3              |        4 | t    | 2019-08-06 19:33:52.255+05:30
      4 | Test Todo 4    |                     |        5 | t    | 2019-08-06 19:33:52.255+05:30
      5 | Test Todo 5    |                     |        5 | t    | 2019-08-06 19:33:52.255+05:30

```

  4. Client Side Code

  - Add an `index.html` to show all todos after $.get()
  - Adding Styles to index.html file `style.css`
  - JS file to display_all todos using `display_all.js`
  addbtn
  - bootstrap Adding for display Todos Beautifully 

  5. ServerSide Again! 

  - installing cors for cross-origin-allow-Access cross-origin-resource-sharing from 'http://127.0.0.1:8080' to 'http://localhost:3000/api/todos'.
    
    ```
    app.use(cors({
      origin : 'http://127.0.0.1:8080',
      optionsSuccessStatus: 200,
    }
    ```

  6. client side

  - Adding a `new.html` page to add more todos using form filling
  - new.js to make $.post() and redirect to index page using window.location
  - Edit a Particular Todo once a Tdodo is clicked `edit.html` and `edit.js`
  - Edit page - redirection from both index page and single page
  - delete Functionality using delete img redirection from both index page and single page

Check-List
-------------
- Generting an Express App
- Setting up database
- Creating database : Migration and Seeding Sample Data
- create a db connection so that we can CRUD to/fro database
- list all the todos from db to / path using express
- API creation On server side for clientside Requests
  - Get all todos mounted at `/`
  - Create a new todo using POST at `/'
  - Update a existing Todo using PUT/PATCH at `/:id`
  - Delete an existing Todo using DELETE at `/:id`

