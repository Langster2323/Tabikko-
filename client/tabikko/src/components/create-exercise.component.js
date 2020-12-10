import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios'
import "react-datepicker/dist/react-datepicker.css";

const CreateExercises = () => {

    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = () => {
        axios.get('http://localhost:9000/users').then(response => {
            if (response.data.length > 0) {
                setUsers(response.data.map(user => user.username))
                setUsername(response.data[0].username)
            }
        })
    }

    const onChangeUserName = (e) => {
        setUsername(e.target.value)
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const onChangeDuration = (e) => {
        setDuration(e.target.value)
    }
    const onChangeDate = (date) => {
        setDate(date)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }

        console.log(exercise);

        const url = 'http://localhost:9000/exercises/add';
        axios.post(url, exercise).then(res => console.log(res.data))
    }
        return (
            <div>
                <h1>Create New Exercise Log</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select  
                        required 
                        className="form-control" 
                        value={username} 
                        onChange={onChangeUserName}>
                            {users.map(user => (
                                <option key={user} value={user}>{user}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" 
                        required className="form-control" 
                        value={description} 
                        onChange={onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input type="text" 
                        required className="form-control" 
                        value={duration} 
                        onChange={onChangeDuration} />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker 
                            selected={date} 
                            onChange={onChangeDate} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
}

export default CreateExercises;