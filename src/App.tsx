import { useState } from "react";
import { Provider } from "react-redux";
import CreateTdodo from "./components/CreateTdodo";
import HeaderTodo from "./components/HeaderTodo";
import Todos from "./components/Todos";
import Modal from "./components/Modal";
import { store } from "./redux";
import {TodoList} from './redux/reducers/todoReducer'

function App() {
  const [updateInput, setUpdateInput] = useState<TodoList | null>(null);

  return (
    <Provider store={store}>
      <HeaderTodo />
      <CreateTdodo />
      <Todos setUpdateInput={setUpdateInput} updateInput={updateInput}/>
      <Modal setUpdateInput={setUpdateInput} updateInput={updateInput}/>
    </Provider>
  );
}

export default App;
