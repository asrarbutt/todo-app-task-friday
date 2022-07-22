import axios from "axios";
import Todos from "../components/Todos";
import {Todo} from "../Todo";

type ServiceProps = {
    service: Todo
}


export const getAllTodos = () =>
    axios.get("/api/todo").then(response => response.data)


export const postTodo = (props: ServiceProps) => {
    axios.post('/api/todo', {
        id: props.service.id,
        description: props.service.description,
        TodoStatus: props.service.status

    })
        .then(function (response) {
            console.log(response);
        }) .catch(function (error) {
        console.log(error);
    });
}