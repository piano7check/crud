import React from 'react'
import './UserTable.css';

const UserTable = ({ users }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.userName}</td>
                            <td><button className='button-styles'>Botón</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};


export default UserTable