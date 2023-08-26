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
       
    
        if (data.status === "todo") {
          console.log("Todo");
          setTodos((prev) => [...prev, data]);
          
        } else if (data.status === "progress") {
          console.log("progress");
          setPending((prev) => [...prev, data]);
         
        } else {
          console.log("Completed");
          setCompletedd((prev) => [...prev, data]);
        }
      }
    };
useEffect(()=>{
console.log(todo.length);
console.log(pend.length);
console.log(completed.length);
},[todo,pend,completed])



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
