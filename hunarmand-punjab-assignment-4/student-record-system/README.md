# Student Record Management System (React CRUD)

A production-ready React application for managing student records with full CRUD operations (Create, Read, Update, Delete). Built with Vite, functional components, and React Hooks.

## Description

This project is a **Student Record Management System** that allows users to:

- **Create** – Add new students with name, email, and course (ID is auto-generated)
- **Read** – View all students in a clean card layout
- **Update** – Edit existing student data via the same form
- **Delete** – Remove student records

The UI includes form validation (all fields required), controlled inputs, and a responsive layout suitable for desktop and mobile.

## Technologies Used

- **React JS** (with Vite)
- **JavaScript**
- **CSS**
- **Functional Components**
- **React Hooks** (`useState`, `useEffect` for form sync when editing)

## Project Structure

```
student-record-system
│
├── public
│
├── src
│   ├── components
│   │   ├── StudentForm.jsx   # Controlled form – Add / Update student
│   │   ├── StudentList.jsx   # Renders list of students
│   │   ├── StudentCard.jsx  # Single student card with Edit / Delete
│   │
│   ├── styles
│   │   └── style.css        # Global styles
│   │
│   ├── App.jsx              # Main state & CRUD logic
│   ├── main.jsx
│   └── index.css            # Minimal base
│
└── README.md
```

## How to Run the Project

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Commands

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (e.g. `http://localhost:5173`) in your browser.

### Build for production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "React CRUD Student Record System"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Replace `<your-repo-url>` with your GitHub repository URL.

### 2. Deploy on Vercel

- Go to [Vercel](https://vercel.com)
- Click **Add New** → **Project**
- Import your GitHub repository
- **Framework Preset:** Vite
- Click **Deploy**

Vercel will detect Vite and use the correct build settings. Your app will be live at a URL like `https://your-project.vercel.app`.

---

**Project:** Student Record Management System (React CRUD)  
**Tech Stack:** React (Vite), JavaScript, CSS, Functional Components, React Hooks
