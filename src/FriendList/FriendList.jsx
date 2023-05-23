import React from 'react';
import { FriendListItem } from './FriendListItem';
import "../FriendList/FriendList.css"

export function FriendList({ friends }) {
    return (
        <div className="wrapper">
            <ul className="friend-list">
                {friends.map(friend => (
                    <FriendListItem key={friend.id} friend={friend} />
                ))}
            </ul>
        </div>
    );
}