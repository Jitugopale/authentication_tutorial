# 🔐 Complete Authentication System | Node.js + Prisma + MySQL + Zod

A bulletproof authentication system built from scratch using modern JavaScript technologies. This tutorial covers secure user registration, login, and protected routes with industry-standard security practices.

## 🚀 Features

✅ **Complete User Management & Security**
- User registration with email validation
- Secure user login with JWT authentication
- Protected route access with middleware
- Password hashing with bcrypt
- Input validation using Zod schemas

✅ **Modern Backend Architecture**
- RESTful API design
- MySQL database with Prisma ORM
- Clean folder structure
- Professional error handling

## 💻 Tech Stack

- **Backend**: Node.js & Express.js
- **Database**: MySQL with XAMPP
- **ORM**: Prisma (latest version)
- **Validation**: Zod schemas
- **Security**: bcrypt + JWT tokens
- **Testing**: Postman API calls

## 🛠️ Prerequisites

- [XAMPP](https://www.apachefriends.org/index.html) - For MySQL database
- [Node.js](https://nodejs.org/en/download) - JavaScript runtime
- [Postman](https://www.postman.com/downloads/) - API testing
- [VS Code](https://code.visualstudio.com/) - Code editor (recommended)

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd auth-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/your_database"
   JWT_SECRET="your-super-secret-jwt-key"
   PORT=3000
   ```

4. **Set up MySQL database**
   - Start XAMPP and ensure MySQL is running
   - Create a new database for the project

5. **Run Prisma migrations**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

6. **Start the server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
AUTH/
├── 📁 controllers/
│   └── 📄 authController.js      # Registration, login, getUser logic
├── 📁 middleware/
│   └── 📄 authMiddleware.js      # JWT token verification
├── 📁 prisma/
│   ├── 📁 migrations/           # Database migration files
│   └── 📄 schema.prisma         # Database models & relations
├── 📁 routes/
│   └── 📄 auth.js               # API route definitions
├── 📁 schema/
│   └── 📄 user.js               # Zod validation schemas
├── 📄 index.js                  # Express server setup
├── 📄 package.json              # Dependencies and scripts
└── 📄 .env                      # Environment variables
```

## 📋 API Endpoints

| Method | Endpoint | Description | Body Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | User registration | ✅ |
| POST | `/api/auth/login` | User login | ✅ |
| GET | `/api/auth/getUser` | Get protected user data | ❌ (Token required) |

### Request Examples

#### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe"
}
```

#### Login User
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

#### Get User Data (Protected Route)
```bash
GET /api/auth/getUser
Authorization: Bearer <jwt-token>
```

## 🛡️ Security Features

- **Password Hashing**: Uses bcrypt for secure password storage
- **JWT Authentication**: Stateless, scalable token system
- **Input Validation**: Prevents malicious data with Zod
- **Middleware Protection**: Automatic route security

## 🧪 Testing with Postman

1. **Register a new user**
   - Method: POST
   - URL: `http://localhost:3000/api/auth/register`
   - Body: Raw JSON with user details

2. **Login with registered user**
   - Method: POST
   - URL: `http://localhost:3000/api/auth/login`
   - Body: Raw JSON with credentials

3. **Access protected route**
   - Method: GET
   - URL: `http://localhost:3000/api/auth/getUser`
   - Headers: Authorization: Bearer <token-from-login>

## 🎯 Perfect For

- Backend development beginners
- Developers learning modern Node.js
- Anyone building production-ready APIs
- Students working on authentication projects

**Found this helpful? Please ⭐ the repository and share with other developers!*
