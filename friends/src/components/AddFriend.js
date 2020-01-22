import React, { useState } from 'react';
import axiosWithAuth from './axiosWithAuth';

function AddFriend(props) {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log('add friend error', err);
            })
    };

    return (
        <div>
            <form>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={newFriend.name}
                    onChange={handleChange}
                />
                <input
                    type='number'
                    name='age'
                    placeholder='Age'
                    value={newFriend.age}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button type='submit' onClick={handleSubmit}>Add Friend</button>
            </form>
        </div>
    );
};

export default AddFriend;