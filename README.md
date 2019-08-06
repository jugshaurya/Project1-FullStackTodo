Project 1 - Full Stack Todo App 
-------------------------------

```
Using
------
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
```

Steps followed : 
----------------

* [] Server Side Code
1. Generated an Express-App using express Generator to quickly create an application skeleton
[Wanna Learn that!](https://expressjs.com/en/starter/generator.html)

```
$ npm install -g express-generator
```
2. Adding a git ignore file and setting view engine to hbs 
```
  $ express --git --view=hbs  

  ouptut: 
  ------
  install dependencies:
    $ npm install will install all :-
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
[Must read](http://perkframework.com/v1/guides/database-migrations-knex.html) :
---------------------

[knex.js cheatsheet](https://devhints.io/knex)

3. Created a database to store all the todos
  ```
  $ createdb tododb 
    ->  create a db in postgresql
  
  $ yarn add knex pg

  $ knex init 
    -> will generate a file named knexfile.js

  $ knex migrate:make todos 
    -> create a migration file inside migration folder to define the structure of table. (see knexfile.js for example)

  $ knex migrate:latest 
   -> creating table inside tododb

```
```
checking:
--------
psql dbname => \dt => \d <table name>
exapmle : 
psql tododb => \dt => \d todos

output:
------
tododb=# select * from todos;
 todoID |     title      |     description     | priority | done |             date              
--------+----------------+---------------------+----------+------+-------------------------------
      1 | First CRUD APP | FULL STACK PROJECT  |        1 | f    | 2019-08-06 19:33:52.255+05:30
      2 | Test Todo 1    | Test 2              |        2 | f    | 2019-08-06 19:33:52.255+05:30
      3 | Test Todo 1    | Test 3              |        3 | t    | 2019-08-06 19:33:52.255+05:30
      4 | Test Todo 1    |                     |        5 | t    | 2019-08-06 19:33:52.255+05:30
      5 | Test Todo 1    |                     |        5 | t    | 2019-08-06 19:33:52.255+05:30
(5 rows)

```
4. seeding data
----------------
 knex seed:make todos 
 knex seed:run => select * from <table name>


check-list
-------------
* [x] Generting an Express App
* [x]setting up database
  * [x] create a database => knex init => create a table using knex migrate:make <table name> => knex migrate:latest
* [x] seed table with some random data to test the functionality   
* [x] list all the todos from db to / path using express
* [] create a db connection so that we can CRUD to/fro database
  * [] create a db folder and a file inside it like knex.js, make a connection and require it in app.js
 












* [] Client Side Code