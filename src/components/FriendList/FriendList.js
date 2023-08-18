import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItemContainer, FriendListContainer } from './FriendList.styled';


export const FriendList = ({ friends }) => (
    <FriendListContainer>
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </ul>
    </FriendListContainer>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};
// ---------------------------------------------------------------------------
export const FriendListItem = ({ friend }) => (

    <FriendListItemContainer data-is-online={friend.isOnline}>
        <span className="status"></span>
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{friend.name}</p>
    </FriendListItemContainer>

);

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};


