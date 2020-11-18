import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td><Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => props.deleteExercise(props.exercise._id)}>delete</a></td>
        </tr>
    )
    
}

export default class ExerciseList extends Component {
    constructor(props) {
        super();
        this.state = {
            exercise: []
        }
    }

    componentDidMount() {
        const url = 'http://localhost:9000/exercises/'
        axios.get(url)
        .then(response => this.setState({
            exercise: response.data
        }))
        .catch(error => {
            console.log(error);
        })
    }

    deleteExercise = (id) => {
        const url = 'http://localhost:9000/exercises/';
        const { exercise } = this.state;
        axios.delete(url + id)
        .then(res => console.log(res))
        this.setState({
            exercise: exercise.filter(el => el._id !== id)
        })
    }

    exerciseList = () => {
        return (
            this.state.exercise.map(currentexercise => {
                return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
            })
        )
    }
    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exerciseList() }
                    </tbody>
                </table>
            </div>
        )
    }
}