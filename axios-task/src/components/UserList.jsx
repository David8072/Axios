import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/Api';

const UserList = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getUsers();
      setUsers(userData);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return(
    <div className="user-list-container">
      <h2>User List</h2>
      <ul className="user-list">
      {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
  );
      };

      export default UserList;