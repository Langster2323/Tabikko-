import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super();
        this.state = {
            username: ''
        }
    }

    onChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = (e) => {
        const { username } = this.state;
        e.preventDefault();

        const user = {
            username: username
        }

        console.log(user);
        const url = 'http://localhost:9000/users/add';

        axios.post(url, user).then(res => console.log(res.data))

        this.setState({
            username: ''
        })
    }
    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input 
                        type="text" 
                        required 
                        className="form-control" 
                        value={this.state.username} 
                        onChange={this.onChangeUserName}
                         />
                    </div>
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}