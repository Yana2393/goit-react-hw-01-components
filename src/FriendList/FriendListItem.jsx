import React from 'react';
import "../FriendList/FriendListItem.css"

export function FriendListItem({ friend }) {
  const statusClass = ['status'];

  statusClass.push(friend.isOnline ? 'is-online' : 'is-offline');
  return (
    <li className="list-item">
      <span className={statusClass.join(" ")}>{friend.isOnline}</span>
      <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
      <p className="name">{friend.name}</p>
    </li>
  );
}
