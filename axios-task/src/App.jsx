import React, { useState } from 'react';
import './App.css'
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [addingUser, setAddingUser] = useState(false);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setSelectedUser(null);
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <h1>User CRUD App</h1>
      <div className="container">
        <div>
          <UserList users={users} onSelectUser={setSelectedUser} />
          <button onClick={() => setAddingUser(true)}>Add New User</button>
        </div>
        <div>
          {selectedUser ? (
            <UserDetails
              user={selectedUser}
              onDeleteUser={handleDeleteUser}
              onUpdateUser={() => {
                setEditingUser(selectedUser);
                setAddingUser(false);
              }}
            />
          ) : (
            <>
              {addingUser ? (
                <AddUserForm
                  onAddUser={(newUser) => {
                    handleAddUser(newUser);
                    setAddingUser(false);
                  }}
                />
              ) : (
                editingUser && (
                  <EditUserForm
                    user={editingUser}
                    onUpdateUser={(updatedUser) => {
                      handleUpdateUser(updatedUser);
                      setEditingUser(null);
                    }}
                  />
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
