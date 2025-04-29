# 📚 Bookstore RESTful API

A simple Bookstore API built with **Express.js**, **TypeScript**, **Knex.js**, and **PostgreSQL**. It allows users to perform CRUD operations on authors and books.

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **Knex.js** (Query Builder)
- **PostgreSQL**
- **Express Validator**
- **Dotenv**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone 
cd bookstore-api
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

### base url

```
http://localhost:5000/api/v1
```