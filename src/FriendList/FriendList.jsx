import React from 'react';
import PropTypes from "prop-types";
import { FriendListItem } from './FriendListItem';
import css from "FriendList/FriendList.module.css"

export function FriendList({ friends }) {
    return (
        <div className={css.wrapper}>
            <ul className={css.friendList}>
                {friends.map(friend => (
                    <FriendListItem key={friend.id} friend={friend} />
                ))}
            </ul>
        </div>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};