import Axios from "axios";
import {withRouter} from 'react-router';
import {JPA_API_URL,API_URL} from "../../component/todo/Constants";

class TodoService {

    //GetTodods
    getTodos=(username)=>{
        return Axios.get(`${JPA_API_URL}/users/${username}/todos`)
    }

    //DeleteTodo
    deleteTodo=(id,username)=>{
        return Axios.delete(`${JPA_API_URL}/users/${username}/todos/${id}`)
    }
    //UpdateTodo
    putTodo=(id,username,todo)=>{
        return Axios.put(`${JPA_API_URL}/users/${username}/todos/${id}`,todo)
    }
    //GetTodoById
    gettododetailsfromId=(id,username,todo)=>{
        return Axios.get(`${JPA_API_URL}/users/${username}/todos/${id}`)
    }

    addTodo=(username,todo)=>{
        return Axios.post(`${JPA_API_URL}/users/${username}/todos`,todo)
    }

}

export default  withRouter(new TodoService());
