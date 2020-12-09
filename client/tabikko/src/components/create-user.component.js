import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [username, setUsername] = useState('')

    const onChangeUserName = (e) => {
        setUsername(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: username
        }

        console.log(user);
        const url = 'http://localhost:9000/users/add';

        axios.post(url, user).then(res => console.log(res.data))

        setUsername('')
    }
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input 
                        type="text" 
                        required 
                        className="form-control" 
                        value={username} 
                        onChange={onChangeUserName}
                         />
                    </div>
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </form>
            </div>
        )
}

export default CreateUser;