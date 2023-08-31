import React, { useState } from 'react';
import { editUser } from '../services/Api';

const EditUserForm = ({ user, onUpdateUser }) => {
    const [editedUser, setEditedUser] = useState(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = await editUser(editedUser.id, editedUser);
    onUpdateUser(updatedUser);
  };

  return(
    <div className="edit-user-form">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input
            type="text"
            value={editedUser.name}
            onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={editedUser.email}
            onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
      </div>
  );
};

export default EditUserForm;