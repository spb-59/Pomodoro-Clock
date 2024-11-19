"use client";

import { useEffect, useState } from "react";

const TODO_LIST_STORAGE = "todo-list-storage";
export default function Todo() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask("");
  };
  const delItem = (index: number) => {
    setTasks((prevTask) => {
      const newTask = [...prevTask];
      newTask.splice(index, 1);
      return newTask;
    });
  };

  useEffect(() => {
    const storedTasksString = localStorage.getItem(TODO_LIST_STORAGE);

    if (storedTasksString) {
      try {
        const storedTasks = JSON.parse(storedTasksString);
        setTasks(storedTasks);
      } catch (error) {
        console.error("Error parsing tasks from local storage:", error);
      }
    } else {
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    const toStore = JSON.stringify(tasks);

    localStorage.setItem(TODO_LIST_STORAGE, toStore);
  }, [tasks]);

  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="w-[99%] bg-box h-[90%] rounded-xl p-4">
        <span className="font-bold text-2xl text-white">To-do</span>
        <div className="flex flex-col p-4 h-full">
          <div className="h-3/4 overflow-scroll flex flex-col hide-scrollbar">
            {tasks.map((item, index) => (
              <TodoItem
                key={index}
                text={item}
                delFunc={() => delItem(index)}
              />
            ))}
          </div>
          <form className="relative flex w-1/2" onSubmit={handleSubmit}>
            <input
              className=" text-white w-full bg-box border-accent border-2 rounded-xl"
              type="text"
              value={newTask}
              onChange={handleInputChange}
            />
            <div className="flex items-center justify-center w-[10%]  absolute right-0">
              <button
                type="submit"
                className="bg-accent border-accent border-2 h-1/4 w-full rounded-xl font-bold text-white"
              >
                +
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function TodoItem({ text, delFunc }: { text: string; delFunc: any }) {
  const [check, setChecked] = useState(false);
  return (
    <div
      className={`inline-flex items-center font-semibold text-xl text-white ${
        check === true ? "line-through" : ""
      }`}
    >
      <label
        className="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor="blue"
      >
        <input
          name="color"
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-accent transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent checked:before:bg-accent hover:before:opacity-10"
          id={text}
          checked={check}
          onClick={() => {
            setChecked(!check);
          }}
        />
        <span className="absolute text-accent transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      <span className="group">
        {" "}
        {text}
        <button onClick={delFunc} className="p-1 invisible group-hover:visible">
          {" "}
          🗑️
        </button>
      </span>
    </div>
  );
}
