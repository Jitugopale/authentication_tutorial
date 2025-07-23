# 🔐 Complete Authentication System with Advanced Error Handling

![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![Express.js](https://img.shields.io/badge/Express.js-4.18+-blue.svg)
![Prisma](https://img.shields.io/badge/Prisma-5.0+-purple.svg)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange.svg)
![JWT](https://img.shields.io/badge/JWT-Authentication-red.svg)

A **bulletproof authentication system** built from scratch using modern JavaScript technologies with **production-grade error handling**. This tutorial covers secure user registration, login, protected routes, and comprehensive error management with industry-standard practices.

---

## 🚀 Features

### ✅ Complete User Management & Security

- 📧 User registration with email validation
- 🔐 Secure user login with JWT authentication  
- 🛡️ Protected route access with middleware
- 🔒 Password hashing with bcrypt
- ✅ Input validation using Zod schemas

### ✅ Modern Backend Architecture

- 🌐 RESTful API design
- 🗄️ MySQL database with Prisma ORM
- 📁 Clean folder structure
- 🚨 **Advanced error handling with custom exceptions**
- 🌍 **Global error management system**

### ✅ Production-Grade Error Handling

- 🎯 Custom exception classes for different error types
- 📊 Structured error responses with proper HTTP status codes
- 🌐 Global error middleware for consistent error handling
- 🔧 Development vs production error modes
- 📝 Comprehensive error logging and debugging

---

## 💻 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | JavaScript runtime | 18+ |
| **Express.js** | Web framework | 4.18+ |
| **MySQL** | Database | 8.0+ |
| **Prisma** | ORM | 5.0+ |
| **Zod** | Input validation | 3.22+ |
| **bcrypt** | Password hashing | 5.1+ |
| **JWT** | Authentication | 9.0+ |

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- [📥 XAMPP](https://www.apachefriends.org/index.html) - For MySQL database
- [📥 Node.js](https://nodejs.org/en/download) - JavaScript runtime (v18+)
- [📥 Postman](https://www.postman.com/downloads/) - API testing
- [📥 VS Code](https://code.visualstudio.com/) - Code editor (recommended)

---

## 📥 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/auth-system.git
cd auth-system
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL="mysql://username:password@localhost:3306/auth_db"

# JWT Configuration  
JWT_SECRET="your-super-secret-jwt-key-min-32-characters"
JWT_EXPIRES_IN="7d"

# Server Configuration
PORT=3000
NODE_ENV=development
```

### 4. Set up MySQL database

- Start XAMPP and ensure MySQL is running
- Create a new database named `auth_db`
- Update the `DATABASE_URL` in `.env` with your credentials

### 5. Run Prisma setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio
npx prisma studio
```

### 6. Start the development server

```bash
npm run dev
```

The server will start on `http://localhost:3000`

---

## 📁 Project Structure

```
AUTH/
├── 📁 controllers/
│   └── 📄 authController.js          # Registration, login, getUser logic
├── 📁 exceptions/                    # 🆕 Custom error classes
│   ├── 📄 bad-request.js            # 400 Bad Request errors
│   ├── 📄 internal-server.js        # 500 Internal Server errors
│   ├── 📄 not-found.js              # 404 Not Found errors
│   ├── 📄 root.js                   # Base exception class
│   ├── 📄 unauthoriz.js             # 401 Unauthorized errors
│   └── 📄 unprocessa.js             # 422 Unprocessable Entity
├── 📁 middleware/
│   └── 📄 authMiddleware.js          # JWT token verification
├── 📁 prisma/
│   ├── 📁 migrations/               # Database migration files
│   └── 📄 schema.prisma             # Database models & relations
├── 📁 routes/
│   ├── 📄 auth.js                   # Authentication routes
│   └── 📄 index.js                  # Route index
├── 📁 schema/
│   └── 📄 user.js                   # Zod validation schemas
├── ⚙️ .env                          # Environment variables
├── 📄 .env.example                  # Environment template
├── 🔒 .gitignore                    # Git ignore rules
├── 🛠️ errorhandler.js               # 🆕 Global error handler
├── 🚀 index.js                      # Express server setup
├── 📦 package.json                  # Dependencies and scripts
└── 📖 README.md                     # Project documentation
```

---

## 🛡️ Advanced Error Handling System

### Custom Exception Classes

Our system uses specialized exception classes for different error scenarios:

| Exception Class | HTTP Status | Use Case |
|----------------|-------------|----------|
| `BadRequestException` | 400 | Invalid input data or malformed requests |
| `UnauthorizedException` | 401 | Authentication failures or invalid tokens |
| `NotFoundException` | 404 | Resource not found errors |
| `UnprocessableException` | 422 | Validation errors from Zod schemas |
| `InternalServerException` | 500 | Server errors and unexpected failures |

### Global Error Handler

The `errorhandler.js` provides:

- ✅ Consistent error response format
- ✅ Development vs production error details  
- ✅ Automatic error logging
- ✅ HTTP status code management

### Error Response Format

All API errors follow this standardized format:

```json
{
  "success": false,
  "message": "User-friendly error message",
  "error": "Error Type", 
  "details": "Additional error details (development only)",
  "statusCode": 400,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

## 📋 API Documentation

### Base URL: `http://localhost:3000/api`

| Method | Endpoint | Description | Auth Required | Body Required |
|--------|----------|-------------|---------------|---------------|
| 🟢 POST | `/auth/register` | User registration | ❌ | ✅ |
| 🟢 POST | `/auth/login` | User login | ❌ | ✅ |
| 🔵 GET | `/auth/getUser` | Get user profile | ✅ | ❌ |

---

## 📝 Request & Response Examples

### 🟢 POST /api/auth/register

**Request:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com", 
  "password": "SecurePass123!"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Email already exists",
  "error": "Bad Request",
  "statusCode": 400
}
```

---

### 🟢 POST /api/auth/login

**Request:**
```json
{
  "email": "john.doe@example.com",
  "password": "SecurePass123!"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid email or password",
  "error": "Unauthorized", 
  "statusCode": 401
}
```

---

### 🔵 GET /api/auth/getUser

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "User data retrieved successfully",
  "data": {
    "id": 1,
    "name": "John Doe", 
    "email": "john.doe@example.com",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

---

## 🛡️ Security Features

- 🔒 **Password Hashing**: Uses bcrypt with salt rounds
- 🎫 **JWT Authentication**: Stateless, scalable token system
- ✅ **Input Validation**: Prevents malicious data with Zod
- 🛡️ **Middleware Protection**: Automatic route security
- 🔐 **Error Information Security**: Sensitive details hidden in production
- 💉 **SQL Injection Prevention**: Prisma ORM protection

---


---

## 🎯 Perfect For

- 👨‍💻 Backend development beginners wanting production-ready code
- 🚀 Developers learning modern Node.js architecture  
- 🏗️ Anyone building scalable APIs with proper error handling
- 🎓 Students working on authentication projects
- 💼 Developers implementing robust error management systems

---

## 🔗 Useful Resources

- 📖 [Prisma Documentation](https://www.prisma.io/docs)
- 📖 [Zod Validation](https://zod.dev/)
- 📖 [Express.js Guide](https://expressjs.com/)
- 📖 [JWT Information](https://jwt.io/)
- 📖 [HTTP Status Codes](https://httpstatuses.com/)

---

## 🚀 What Makes This Special

✅ **Production-Ready Error Handling**  
✅ **Clean Architecture Patterns**  
✅ **Comprehensive API Documentation**  
✅ **Security Best Practices**  
✅ **Modern JavaScript Standards**  
✅ **Scalable Project Structure**  

---

## ⭐ Support

If you found this project helpful, please give it a ⭐ star on GitHub and share it with other developers!

---

<div align="center">
  <p>Made with ❤️ by developers, for developers</p>
  <p>
    <a href="#top">🔝 Back to Top</a> •
    <a href="https://github.com/yourusername/auth-system">🌟 Star this repo</a> •
    <a href="https://github.com/yourusername/auth-system/issues">🐛 Report Bug</a>
  </p>
</div>