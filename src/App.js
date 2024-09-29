import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Notification from './components/Notification';
import ApiStatus from './components/ApiStatus';
import Footer from './components/Footer';
import { getUsers, addUser } from './Api';
import './App.css';


const App = () => {
  const [users, setUsers] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleAddUser = async (user) => {
    const newUser = await addUser(user);
    setUsers([...users, newUser]);
    setNotification('User added successfully!');
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    setNotification('User deleted successfully!');
  };

  return (
    <div className="App">
      <Header />
      <ApiStatus />
      <Notification message={notification} />
      <UserForm onSubmit={handleAddUser} />
      <UserList users={users} onDelete={handleDeleteUser} />
      <Footer />
    </div>
  );
};

export default App;