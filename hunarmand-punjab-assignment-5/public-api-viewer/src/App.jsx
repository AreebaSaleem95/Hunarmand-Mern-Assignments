import { useState, useEffect } from "react";
import { fetchUsers } from "./services/api";
import Loader from "./components/Loader";
import DataList from "./components/DataList";
import "./styles/style.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Public API Data Viewer</h1>
        <p>User data from JSONPlaceholder API</p>
      </header>
      <main className="app-main">
        {loading && <Loader />}
        {error && <p className="error-message">{error}</p>}
        {!loading && !error && users.length > 0 && <DataList users={users} />}
      </main>
    </div>
  );
}

export default App;
