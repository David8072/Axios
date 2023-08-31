import React, { useState } from 'react';
import { addUser } from '../services/Api';

const AddUserForm = ({ onAddUser }) => {
    const [user, setUser] = useState({ name: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await addUser(user);
    onAddUser(newUser);
    setUser({ name: '', email: '' });
  };

  return(
    <div className="add-user-form">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>
        <button type="submit">Add User</button>
      </form>
      </div>
  );
};

export default AddUserForm;