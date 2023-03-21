import { TodoList } from "../redux/reducers/todoReducer";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleState } from "../redux/actions/todoActions";


interface TodoCardProps extends TodoList {
  updateInput: TodoList | null;
  setUpdateInput: React.Dispatch<React.SetStateAction<TodoList | null>>;
}

const TodoCard = ({
  id,
  text,
  completed,
  updateInput,
  setUpdateInput,
}: TodoCardProps) => {

  const dispatch = useDispatch();

  const changeState = () => {
    dispatch(toggleState({ id, text, completed }));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ id, text, completed }));
  };

  const handleUpdateTodo = () => {
    setUpdateInput({ id, text, completed })
  };

  return (
    <div
      onClick={changeState}
      className={`container cursor-pointer mx-auto my-2 px-5 py-2  ${
        !completed
          ? "bg-black text-white"
          : "bg-white text-black line-through outline outline-1 outline-gray-300"
      } transition-colors duration-300 rounded flex justify-between items-center`}
    >
      <span className="py-1">{text}</span>
      <div className="flex gap-3">
        <button onClick={handleDeleteTodo}>
          <svg
            className={`w-7 ${
              !completed ? "fill-white" : "fill-black"
            } transition-colors`}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M176.662 817.173c-8.19 8.471-7.96 21.977 0.51 30.165 8.472 8.19 21.978 7.96 30.166-0.51l618.667-640c8.189-8.472 7.96-21.978-0.511-30.166-8.471-8.19-21.977-7.96-30.166 0.51l-618.666 640z"
                fill=""
              ></path>
              <path
                d="M795.328 846.827c8.19 8.471 21.695 8.7 30.166 0.511 8.471-8.188 8.7-21.694 0.511-30.165l-618.667-640c-8.188-8.471-21.694-8.7-30.165-0.511-8.471 8.188-8.7 21.694-0.511 30.165l618.666 640z"
                fill=""
              ></path>
            </g>
          </svg>
        </button>
        <button onClick={handleUpdateTodo}>
          <svg
            className={`w-7 ${
              !completed ? "fill-white" : "fill-black"
            } transition-colors`}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path>
              <path d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
