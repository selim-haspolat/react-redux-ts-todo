import { useRef } from "react";
import { useDispatch } from "react-redux";
import { TodoList } from "../redux/reducers/todoReducer";
import { addTodo, removeAllTodos } from "../redux/actions/todoActions";

const CreateTdodo = () => {
  const dispatch = useDispatch();
  const todoInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = new Date().getTime();
    const payload: TodoList = {
      text: todoInput?.current?.value || "abuzer",
      id: id,
      completed: false,
    };
    dispatch(addTodo(payload));
    todoInput.current && (todoInput.current.value = "");
  };

  const handleDeleteAll = () => {
    dispatch(removeAllTodos())
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-3 my-10"
    >
      <input
        type="text"
        ref={todoInput}
        className="w-72 px-2 py-1.5 border border-gray-400 rounded outline-none"
        required
      />
      <button
        type="submit"
        className="outline outline-1 outline-black px-1.5 py-1 hover:bg-black duration-300 transition-colors rounded group"
      >
        <svg
          className="w-7 fill-black duration-300 transition-colors group-hover:fill-white"
          viewBox="0 0 1920 1920"
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
              d="M915.744 213v702.744H213v87.842h702.744v702.744h87.842v-702.744h702.744v-87.842h-702.744V213z"
              fillRule="evenodd"
            ></path>
          </g>
        </svg>
      </button>
      <button className="outline outline-1 outline-black px-1.5 py-1 hover:bg-black duration-300 transition-colors rounded group" type="button" onClick={handleDeleteAll}>
        <svg
          className="w-7 fill-black duration-300 transition-colors group-hover:fill-white"
          viewBox="0 0 1024 1024"
          fill="#000000"
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
              d="M32 241.6c-11.2 0-20-8.8-20-20s8.8-20 20-20l940 1.6c11.2 0 20 8.8 20 20s-8.8 20-20 20L32 241.6zM186.4 282.4c0-11.2 8.8-20 20-20s20 8.8 20 20v688.8l585.6-6.4V289.6c0-11.2 8.8-20 20-20s20 8.8 20 20v716.8l-666.4 7.2V282.4z"
              fill=""
            ></path>
            <path
              d="M682.4 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM367.2 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM524.8 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM655.2 213.6v-48.8c0-17.6-14.4-32-32-32H418.4c-18.4 0-32 14.4-32 32.8V208h-40v-42.4c0-40 32.8-72.8 72.8-72.8H624c40 0 72.8 32.8 72.8 72.8v48.8h-41.6z"
              fill=""
            ></path>
          </g>
        </svg>
      </button>
    </form>
  );
};

export default CreateTdodo;