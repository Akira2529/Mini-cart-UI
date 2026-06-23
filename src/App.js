import './App.css';
import { useState, useEffect } from 'react';
import { getUsers } from './api/userApi';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>Select User</h3>

          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="">Select User</option>

            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>

          <p>Selected User ID: {selectedUser}</p>
        </div>
      </header>
    </div>
  );
}

export default App;