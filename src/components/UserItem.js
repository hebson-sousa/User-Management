import React from 'react';

const UserItem = ({ user, onDelete }) => (
  <li>
    {user.name} ({user.email})
    <button onClick={() => onDelete(user.id)}>Excluir</button>
  </li>
);

export default UserItem;