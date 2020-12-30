import React, {Component} from 'react'
import {withRouter} from 'react-router';
import TodoService from "../../api/todo/TodoService";
import Authentification from "./Authentification";
import moment from "moment";

class ListTodos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                // { id: 1, description: 'Learn React', status: false, date: new Date() },
                // { id: 2, description: 'Learn Bootstrap', status: false, date: new Date() },
                // { id: 3, description: 'Learn JEE', status: false, date: new Date() }
            ],
            message: "",
            deleteSeccess: false
        }

    }

    componentDidMount = () => {
        this.refreshTodos()
    }


    refreshTodos = () => {
        let name = Authentification.getLoggedInUsername()
        TodoService.getTodos(name).then(response => {
            this.setState({
                    todos: response.data
                }
            )
        })
    }

    newTodo=()=>{
        console.log("New Todo")
        this.props.history.push(`/todos/-1`)
    }

    delete = (id) => {
        let username = Authentification.getLoggedInUsername()
        TodoService.deleteTodo(id, username).then(response => {
            this.setState(
                {
                    message: "The Todo of Id " + id + " has been deleted",
                    deleteSeccess: true
                }
            )
            this.refreshTodos()
        });
    }

    updateTodo = (id) => {
        this.props.history.push(`/todos/${id}`)
        // let username = Authentification.getLoggedInUsername()
        // TodoService.putTodo(id, username).then(response => {
        //     this.setState(
        //         {
        //             message: "The Todo of Id " + id + " has been updated",
        //             deleteSeccess: true
        //         }
        //     )
        //     this.refreshTodos()
        // });
    }


    render() {
        return (
            <div className="ListTodos">
                <h1>List Todos</h1>
                {this.state.deleteSeccess && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(
                                (todo) =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate).format("DD/MM/YYYY")}</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    onClick={() => this.updateTodo(todo.id)}>Update
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger"
                                                    onClick={() => this.delete(todo.id)}>Delete
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <button className="btn btn-success" onClick={() => this.newTodo()}>Add Todo</button>
                </div>
            </div>
        )
    }
}

export default withRouter(ListTodos)
