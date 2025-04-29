# 📚 Bookstore RESTful API

A simple Bookstore API built with **Express.js**, **TypeScript**, **Knex.js**, and **PostgreSQL**. It allows users to perform CRUD operations on authors and books.

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **Knex.js** (Query Builder)
- **PostgreSQL**
- **Zod Validator**
- **Dotenv**

---

## 🚀 Getting Started

<span style="color: red;">First thing : Please Run your pg server locally</span>

### 1. Clone the repository

```bash
git clone https://github.com/Shatab99/knex-m360.git
cd knex-m3600
```

### 2. Install dependences 

```
npm i
```

### 3. Setup .env file 

```
DB_HOST=your-db-host
DB_PORT=5432
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
NODE_ENV=development
PORT=5000
DEBUG = knex:query
JWT_SECRET= <Secret>
```

### 4. Run Migration 

```
npm run migration
```

### 5. Run in development mode 
```
npm run dev
```




# Api end points 


### Authors Endpoints 

**list of all authors** `GET`
```
http://localhost:5000/api/v1/author/authors?page=1&limit=10
```

***Details of a single author*** `GET`

```
http://localhost:5000/api/v1/author/authors/2
```
***Create a new author*** `POST`

```
http://localhost:5000/api/v1/author/authors
```
body : 
```json
{
  "name": "Alice Johnson",
  "email": "alice3.johnson@example.com",
  "password": "1234567", 
  "bio": "Author and blogger passionate about literature and storytelling.",
  "birthdate": "1990-07-15"
}
```
***Update an existing author*** `PUT`

```
http://localhost:5000/api/v1/author/authors/6
```
body : 
```json
{
  "name": "Alice Johnson updated",
}
```

***Delete an author*** `DELETE`

```
http://localhost:5000/api/v1/author/authors/6
```


### Books Endpoints

**Retrieve a list of all books** `GET`
```
http://localhost:5000/api/v1/book/books?page=1&limit=10&search=alice
```

***Retrieve details of a single book*** `GET`

```
http://localhost:5000/api/v1/book/books/1
```
***Create a new book*** `POST`

```
http://localhost:5000/api/v1/book/books
```
body : 
```json
{
  "name": "Alice Johnson",
  "email": "alice3.johnson@example.com",
  "password": "1234567", 
  "bio": "Author and blogger passionate about literature and storytelling.",
  "birthdate": "1990-07-15"
}
```
***Update an existing book*** `PUT`

```
http://localhost:5000/api/v1/book/books/1
```
body : 
```json
{
  "name": "Alice Johnson updated",
}
```

***Delete a Book*** `DELETE`

```
http://localhost:5000/api/v1/book/books/1
```

### Authentication

***login**
```
http://localhost:5000/api/v1/auth/login
```

```json
{
    "email": "shatab@example.com",
    "password": "123456"
}
```

***Get Me**

```
http://localhost:5000/api/v1/auth/getme
```
