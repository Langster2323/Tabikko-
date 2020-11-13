import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercises extends Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }
    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user',
        })
    }

    onChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    onChangeDuration = (e) => {
        this.setState({
            duration: e.target.value
        })
    }
    onChangeDate = (date) => {
        this.setState({
            date: date
        })
    }

    onSubmit = (e) => {
        const { username, description, duration, date } = this.state;
        e.preventDefault();

        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }

        console.log(exercise);

        window.location = '/';
    }
    render() {
        return (
            <div>
                <h1>Create New Exercise Log</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput" 
                        required 
                        className="form-control" 
                        value={this.state.username} 
                        onChange={this.onChangeUserName}>
                            {this.state.users.map(user => (
                                <option key={user} value={user}>{user}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" 
                        required className="form-control" 
                        value={this.state.description} 
                        onChange={this.onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input type="text" 
                        required className="form-control" 
                        value={this.state.duration} 
                        onChange={this.onChangeDuration} />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker 
                            selected={this.state.date} 
                            onChange={this.onChangeDate} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}