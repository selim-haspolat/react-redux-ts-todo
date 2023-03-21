import { ADD_TODO, DELETE_TODO, REMOVE_ALL_TODOS, TOGGLE_TODO_STATE, UPDATE_TODO } from "../types/todoTypes";

export interface TodoList {
  id: number;
  text: string;
  completed: boolean;
}

interface Action {
  type: string;
  payload: TodoList
}

const initialState = {
  todoList: [] as TodoList[],
};

const todoReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [...state.todoList, payload],
      };
    case DELETE_TODO:
      return {
        todoList: state.todoList.filter((todo) => todo.id !== payload.id),
      };
    case UPDATE_TODO:
        return {
            todoList: state.todoList.map((todo) => todo.id === payload.id? payload : todo),
        }
    case TOGGLE_TODO_STATE:
        return {
            todoList: state.todoList.map((todo) => todo.id === payload.id? {...todo, completed:!todo.completed } : todo),
        }
    case REMOVE_ALL_TODOS:
        return {
            todoList: [],
        }
    default:
        return state;
  }
};

export default todoReducer;