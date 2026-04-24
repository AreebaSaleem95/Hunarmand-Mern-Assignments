# Public API Data Viewer

A beginner-friendly React application that fetches and displays user data from a public API using Axios.

## Description

This project demonstrates how to:

- Create a React app with Vite
- Fetch data from an external API using Axios
- Use React Hooks (`useState`, `useEffect`) for state and side effects
- Display data in a responsive card layout with loading and error states

## Technologies Used

- **React JS** – UI library
- **Vite** – Build tool and dev server
- **Axios** – HTTP client for API requests
- **JavaScript** – Programming language
- **CSS** – Styling

## Features

- Fetches user data from JSONPlaceholder API
- Displays **Name**, **Email**, **Phone**, and **Company** for each user
- Loading message while data is being fetched
- Error message if the API request fails
- Responsive grid layout with card design
- Hover effects on cards

## API Source

- **API:** [JSONPlaceholder – Users](https://jsonplaceholder.typicode.com/users)
- **Data:** Mock user list (name, email, phone, company name)

## How to Run the Project

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

## Project Structure

```
public-api-viewer
├── public
├── src
│   ├── components
│   │   ├── DataList.jsx
│   │   ├── DataCard.jsx
│   │   └── Loader.jsx
│   ├── services
│   │   └── api.js
│   ├── styles
│   │   └── style.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md
```

## Deployment (e.g. Vercel)

1. Push the project to GitHub:

   ```bash
   git init
   git add .
   git commit -m "React Axios API Viewer"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. On [Vercel](https://vercel.com), connect your GitHub repository, select the Vite framework, and click Deploy.
