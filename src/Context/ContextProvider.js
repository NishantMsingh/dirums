import React, { useEffect, useState } from 'react';
import CartContext from './Cart-context';

const CartProvider = (props) => {
  const [value, setValue] = useState(false);
  const [alltasks, setAllTasks] = useState([]);

  const MenuHandler = () => {
    setValue((prev) => !prev);
  };

  const TaskHandler = (data) => {
    console.log(data);
    setAllTasks((prev) => [...prev, data]);
    console.log(alltasks,"all ");
  };



  const contextValue = {
    menuToggle: MenuHandler,
    all: alltasks,
    menu: value,
    addTask: TaskHandler,
  };

  return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
