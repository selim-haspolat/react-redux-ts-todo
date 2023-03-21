import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";
import { TodoList } from "../redux/reducers/todoReducer";

const Todos = ({
  updateInput,
  setUpdateInput,
}: {
  updateInput: TodoList | null;
  setUpdateInput: React.Dispatch<React.SetStateAction<TodoList | null>>;
}) => {
  const { todoList } = useSelector((state: any) => state.todoReducer);
  return (
    <div className="flex flex-col-reverse">
      {todoList.map((t: TodoList) => (
        <TodoCard key={t.id} {...t} setUpdateInput={setUpdateInput} updateInput={updateInput}/>
      ))}
    </div>
  );
};

export default Todos;
