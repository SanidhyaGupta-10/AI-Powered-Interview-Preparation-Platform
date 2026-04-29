# 🚀 AIhire - AI-Powered Interview Preparation Platform

[![Next.js](https://img.shields.io/badge/Next.js-16+-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-5.2-lightgrey?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)](https://www.mongodb.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-orange?logo=openai)](https://openai.com/)
[![Bun](https://img.shields.io/badge/Bun-Runtime-f9f1e1?logo=bun)](https://bun.sh/)

A sophisticated, AI-powered platform designed to revolutionize the recruitment process. By leveraging Large Language Models (LLMs), the platform analyzes resumes, generates tailored interview questions, and provides comprehensive performance reports.

---

## ✨ Key Features

### 🧠 AI-Driven Intelligence
- **Resume Parsing**: Automatically extracts skills, experience, and projects from uploaded PDF resumes using `pdf-parse`.
- **Dynamic Question Generation**: Generates context-aware interview questions specific to the candidate's background using OpenAI's GPT models.
- **Automated Scoring**: Evaluates responses and provides a detailed breakdown of strengths and areas for improvement.

### 🛡️ Secure Authentication System
- **JWT-Based Security**: Robust authentication using JSON Web Tokens (JWT) for session management.
- **Bcrypt Hashing**: Industry-standard password encryption to ensure user data integrity.
- **Protected Routes**: Secure navigation in the frontend using high-order components and middleware.
- **Token Blacklisting**: Integrated logout mechanism with server-side token invalidation.

### 📊 Comprehensive Dashboard
- **Report History**: View and manage all previous interview reports in a centralized location.
- **Detailed Analytics**: Breakdown of candidate performance across different categories.
- **PDF Export**: Generate high-quality PDF reports using Puppeteer for easy sharing and documentation.

### 🎨 Premium User Experience
- **Modern UI**: A sleek, dark-themed interface built with **Tailwind CSS 4.0**.
- **Micro-Animations**: Smooth transitions and interactive elements powered by **Framer Motion**.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 16+, React 19, Tailwind CSS 4, Framer Motion, Axios, Lucide React |
| **Backend** | Node.js, Express 5.2, **Bun** (Runtime), Multer (File Uploads) |
| **Database** | MongoDB Atlas, Mongoose (ODM) |
| **AI / ML** | OpenAI API (GPT-4), Zod (Schema Validation) |
| **Utilities** | Puppeteer (PDF Gen), PDF-parse, JWT, BcryptJS |

---

## 📂 Project Structure

```text
root/
├── web/                  # Frontend (Next.js Application)
│   ├── app/              # App Router (Protected & Public Routes)
│   ├── components/       # Reusable UI Components
│   ├── hooks/            # Custom React Hooks
│   └── types/            # TypeScript Definitions
├── server/               # Backend (Express API)
│   ├── src/
│   │   ├── controllers/  # Business Logic
│   │   ├── models/       # MongoDB Schemas
│   │   ├── routes/       # API Endpoints
│   │   ├── services/     # Third-party Integrations (OpenAI, PDF)
│   │   └── middleware/   # Auth & Validation Middleware
│   └── index.ts          # Entry Point
└── README.md             # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) or [Node.js](https://nodejs.org/) installed.
- MongoDB Atlas account and connection string.
- OpenAI API Key.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SanidhyaGupta-10/Gen-AI-Full-Stack-Web-Development-Project.git
   cd Gen-AI-Full-Stack-Web-Development-Project
   ```

2. **Setup Backend:**
   ```bash
   cd server
   # Create .env file and add your credentials (MONGO_URI, OPENAI_API_KEY, JWT_SECRET)
   bun install
   bun dev
   ```

3. **Setup Frontend:**
   ```bash
   cd ../web
   # Create .env.local file and add NEXT_PUBLIC_API_URL
   npm install
   npm run dev
   ```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the platform, feel free to fork the repo and submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ by Sanidhya Gupta</p>
