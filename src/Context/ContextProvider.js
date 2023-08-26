import React, { useEffect, useState } from 'react';
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
        setAllTasks((prev) => [...prev, data]);
    
        if (data.status === "todo") {
          setTodos((prev) => [...prev, data]);
        } else if (data.status === "pending") {
          setPending((prev) => [...prev, data]);
        } else {
          setCompletedd((prev) => [...prev, data]);
        }
      }
    };




  const contextValue = {
    menuToggle: MenuHandler,
    all: alltasks,
    todos:todo,
    pending:pend,
    completed:completed,
    menu: value,
    addTask: TaskHandler,
  };

  return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
