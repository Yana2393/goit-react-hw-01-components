import React from 'react';
import PropTypes from 'prop-types';
import css from 'FriendList/FriendListItem.module.css'


export function FriendListItem({ friend }) {
  const statusClass = [css.status];

  statusClass.push(friend.isOnline ? css.isOnline : css.isOffline);
  return (
    <div className={css.wrapper}>
      <li className={css.listItem}>
      <span className={statusClass.join(" ")}>{friend.isOnline}</span>
      <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
      <p className={css.name}>{friend.name}</p>
    </li>
    </div>
    
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
}