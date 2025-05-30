# Learning Management System (LMS)

A fully responsive and interactive Learning Management System (LMS) built as a personal freelance project for managing school-level student activities. This web application offers a streamlined experience for teachers, students, and administrators, enabling digital learning, progress tracking, and content delivery in one centralized platform.

## 🔧 Tech Stack

### Frontend
- **React** with **TypeScript**
- **Chakra UI** – Modern and accessible UI component library
- **React Router** – For managing client-side routing
- **Axios** – For API requests
- **Framer Motion** – Smooth animations and transitions

### Backend
- **Node.js** with **Express**
- **MongoDB** – NoSQL database for data persistence
- **JWT** – Authentication using JSON Web Tokens
- **Mongoose** – Elegant MongoDB object modeling

### Design & Prototyping
- **Figma** – All screens were designed and prototyped using Figma

## ✨ Features

### 🧑‍🏫 Admin Panel
- User role management (Admin, Teacher, Student)
- CRUD operations for classes, subjects, users
- View and manage all platform data

### 📚 Teacher Dashboard
- Create and manage assignments
- Upload learning resources
- View student submissions
- Manage classroom discussions

### 🧑‍🎓 Student Dashboard
- View assigned lessons and tasks
- Submit assignments
- Track progress and grades
- Participate in classroom Q&A

### 📊 Analytics & Reports
- Real-time performance tracking
- Assignment submission rates
- Student attendance overview

### 💬 Notifications
- In-app and email notifications for task deadlines and updates

## 🎯 Key Highlights
- Fully responsive design for both desktop and mobile
- Accessible UI adhering to WCAG standards
- Secure login and session management
- Modular and scalable codebase following best practices

## 📁 Folder Structure (Frontend)

src/
├── assets/
├── components/
├── pages/
│ ├── Admin/
│ ├── Student/
│ ├── Teacher/
├── routes/
├── services/
├── types/
├── utils/
└── App.tsx

shell
Copy
Edit

## 🌐 Live Demo

> [Link to Live Deployment – if applicable]

## 🧪 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/lms-system.git
cd lms-system
2. Install Dependencies
Frontend
bash
Copy
Edit
cd client
npm install
npm start
Backend
bash
Copy
Edit
cd server
npm install
npm run dev
3. Environment Variables
Create .env files in both client/ and server/ directories with necessary configuration such as:

For Server
ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
🖌️ UI/UX Prototype
Designed in Figma – Figma Prototype Link

📸 Screenshots
Login	Admin Dashboard	Teacher Dashboard	Student Dashboard

🧑‍💻 Author
Your Name – @yourgithub

Portfolio: yourportfolio.com

📃 License