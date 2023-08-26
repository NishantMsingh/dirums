import React, { useEffect, useState, useContext } from 'react';
import './App.css';

import NavigationBar from './Components/Navbar/NavigationBar';
import Header from './Components/Header/Header';

import CartContext from './Context/Cart-context';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

function App() {
  const ctx = useContext(CartContext);

 const [flg,setFlg]=useState(true);

 useEffect(() => {
  if(flg)
  {
    setFlg(false);
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
    storedTasks.map((task) => {
      ctx.addTask(task);
    });
  }
  }
}, []);
  
  return (
    <>
 
      <NavigationBar />
      <Header  />
      <Main />
      <Footer/>
    </>
  );
}

export default App;
