import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios'
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercises extends Component {
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
        const getExerciseUrl = 'http://localhost:9000/exercises/'
        axios.get(getExerciseUrl+this.props.match.params.id)
        .then(response => {
            this.setState({
                username: response.data.username,
                description: response.data.description,
                duration: response.data.duration,
                date: new Date(response.data.date)
            })
        })
        .catch(error => console.log(error))

        const getUserUrl = 'http://localhost:9000/users'
        axios.get(getUserUrl).then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users:response.data.map(user => user.username)
                })
            }
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

        const url = 'http://localhost:9000/exercises/update/'+this.props.match.params.id;
        axios.post(url, exercise).then(res => console.log(res.data))
    }
    render() {
        return (
            <div>
                <h1>Edit Exercise Log</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select  
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
                    <div className="form-group">
                        <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}