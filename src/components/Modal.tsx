import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions/todoActions";
import { TodoList } from "../redux/reducers/todoReducer";

const Modal = ({
  updateInput,
  setUpdateInput,
}: {
  updateInput: TodoList | null;
  setUpdateInput: React.Dispatch<React.SetStateAction<TodoList | null>>;
}) => {
  const [inputValue, setInputValue] = useState<string>(updateInput?.text || "");
  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue(updateInput?.text || "");
  }, [updateInput]);

  const handleUpdateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (updateInput?.id || updateInput?.completed) {
      const payload = {
        id: updateInput?.id,
        text: inputValue,
        completed: updateInput?.completed,
      };
      dispatch(updateTodo(payload));
    }
    else{
        console.log('errrorrr');
    }
    setUpdateInput(null);
  };

  return (
    <form
      onSubmit={handleUpdateTodo}
      className={`absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col gap-3 items-center rounded-lg bg-blue-100/50 z-10 p-5 ${
        updateInput ? "flex" : "hidden"
      }`}
    >
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className="w-72 px-2 py-1.5 border border-gray-400 rounded outline-none"
        required
      />
      <button
        type="submit"
        className="outline outline-1 px-3 py-1 outline-black hover:bg-black hover:text-white duration-300 transition-colors rounded"
      >
        Update
      </button>
    </form>
  );
};

export default Modal;
