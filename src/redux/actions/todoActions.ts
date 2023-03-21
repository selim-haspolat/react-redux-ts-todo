import { ADD_TODO, DELETE_TODO, REMOVE_ALL_TODOS, TOGGLE_TODO_STATE, UPDATE_TODO } from "../types/todoTypes";
import { TodoList} from "../reducers/todoReducer";

interface ActioinReturn {
    type: string;
    payload?:TodoList;
}

export const addTodo = (payload:TodoList):ActioinReturn => {
    return {
        type: ADD_TODO,

        payload
    }
}

export const deleteTodo = (payload:TodoList):ActioinReturn => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const updateTodo = (payload:TodoList):ActioinReturn => {
    return {
        type: UPDATE_TODO,
        payload
    }
}

export const toggleState = (payload:TodoList):ActioinReturn => {
    return {
        type: TOGGLE_TODO_STATE,
        payload
    }
}

export const removeAllTodos = ():ActioinReturn => {
    return {
        type: REMOVE_ALL_TODOS,
    }
}
