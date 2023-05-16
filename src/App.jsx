import React, { useState, useEffect } from 'react';

const UserDisplay = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      ; l
      try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();

    const interval = setInterval(() => {
      fetchUsers();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <img src={user.picture.large} alt="User" />
          <p>{user.name.first} {user.name.last}</p>
          {/* Add additional information you want to display */}
        </div>
      ))}
    </div>
  );
};
<<<<<<< HEAD

export default UserDisplay;
=======

export default UserDisplay;

>>>>>>> 97bd3aa176c35129f577a2eb3083d2d9323ff6f0
