<<<<<<< HEAD
# Pixisphere Backend

This is the backend server for **Pixisphere**, a role-based service inquiry platform with authentication, partner onboarding, lead assignment, and admin dashboard functionalities.

Built using **Node.js**, **Express.js**, and **MongoDB**.

---

## 🔧 Features

- ✅ Role-based Authentication (Client, Partner, Admin)
- ✅ Partner Onboarding + Admin Verification
- ✅ Inquiry System with Lead Matching
- ✅ Partner Dashboard: View & Update Leads
- ✅ Portfolio CRUD for Partners
- ✅ Admin Dashboard: Stats, Review Moderation, Category Management
- ✅ JWT-based protected routes
- ✅ Modular Folder Structure (Controllers, Routes, Models, Middleware)

---

## 🧪 API Testing

Use the Postman collection below to test all APIs.

📁 **Postman Collection**: `Pixisphere.postman_collection.json`

---

## 🛠️ Tech Stack

- **Node.js** / **Express**
- **MongoDB** / **Mongoose**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **dotenv** for config
- **Nodemon** for development

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone [https://github.com/your-username/pixisphere-backend.git](https://github.com/tabish-27/Pixisphere-backend.git)
cd pixisphere-backend

```

## 🚦 Rate Limiting & Logging

- All APIs are protected with rate limiting (100 requests per 15 minutes per IP).
- All requests are logged using morgan (dev mode).

## 📖 API Documentation (Swagger)

- Interactive API docs available at: `http://localhost:5000/api-docs`

## 🐳 Docker

- To run with Docker:
```bash
docker build -t pixisphere-backend .
docker run -p 5000:5000 pixisphere-backend
```
=======
# Pxisphere
>>>>>>> 093ad9776064e4d7ac84494ae2e538dad204cbee
