import React, { useState } from 'react';
import EditUserForm from './EditUserForm';

const UserDetails = ({ user, onDeleteUser, onUpdateUser }) => {
    const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleUpdateUser = (updatedUser) => {
    onUpdateUser(updatedUser);
    setEditing(false);
  };

  return(
    <div className="user-details">
        <div>
      {editing ? (
        <EditUserForm user={user} onUpdateUser={handleUpdateUser} />
      ) : (
        <div>
          <h2>User Details</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDeleteUser(user.id)}>Delete</button>
        </div>
      )}
    </div>
    </div>
    );
      };

      export default UserDetails;