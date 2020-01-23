import React, { useState, useEffect } from 'react';
import axiosWithAuth from './axiosWithAuth';
import AddFriend from './AddFriend';

function FriendList() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res.data);
                setFriends(res.data)
            })
            .catch(err => {
                console.log('friend list err', err)
            })
    }, [friends]);
    
    return (
        <div className='container'>
            <div className='title'>
                <h1>My Contacts</h1>
            </div>
            <div className='friend-list'>
                {friends.map(friend => (
                    <div key={friend.id} className='friends'>
                        <h3>{friend.name}, {friend.age}</h3>
                        <p>{friend.email}</p>
                    </div>
                ))}
            </div>
            <AddFriend />
        </div>
    );
};

export default FriendList;