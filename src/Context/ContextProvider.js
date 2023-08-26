import React, { useState } from 'react';
import CartContext from './Cart-context';

const CartProvider = (props) => {
  const [value, setValue] = useState(false);
  const [alltasks, setAllTasks] = useState([]);
  const [todo, setTodos] = useState([]);
  const [pend, setPending] = useState([]);
  const [completed, setCompletedd] = useState([]);

  const MenuHandler = () => {
    setValue((prev) => !prev);
  };



  const TaskHandler = (data) => {
    const taskExists = alltasks.some(task => task.id === data.id);

    if (!taskExists) {


      if (data.status === "todo") {
        setTodos((prev) => [...prev, data]);

      } else if (data.status === "pending") {
        setPending((prev) => [...prev, data]);

      } else if (data.status === "completed") {
        setCompletedd((prev) => [...prev, data]);
      }
    }
  };


  const DraggedTaskHandler = (draggedTask, destinationColumn, updatedDraggedTask) => {



    if (draggedTask.status === "todo") {
      let temp = todo.filter((val) => {
        return val.id !== draggedTask.id;
      });
      setTodos(temp);
      if (destinationColumn === "pending") {

        setPending((prev) => [...prev, updatedDraggedTask]);

      } else {
        setCompletedd((prev) => [...prev, updatedDraggedTask]);


      }
    }

    else if (draggedTask.status === "pending") {
      console.log("1");
      let temp = pend.filter((val) => {
        return val.id !== draggedTask.id;
      });
      console.log("2");
      setPending(temp);
      console.log(pend);
  
      if (destinationColumn === "completed") {
        console.log("3");
        setCompletedd((prev) => [...prev, updatedDraggedTask]);
      }
    }

    const storedData = JSON.parse(localStorage.getItem("tasks"));

    if (storedData) {
      const taskIndex = storedData.findIndex((task) => task.id === draggedTask.id);
      if (taskIndex !== -1) {
        storedData.splice(taskIndex, 1, updatedDraggedTask);
        localStorage.setItem("tasks", JSON.stringify(storedData));
      }
    }



  };

  const contextValue = {
    menuToggle: MenuHandler,
    all: alltasks,
    todos: todo,
    pending: pend,
    updateDraged: DraggedTaskHandler,
    completed: completed,
    menu: value,
    addTask: TaskHandler,
  };

  return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
