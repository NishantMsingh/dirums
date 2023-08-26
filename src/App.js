import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import NavigationBar from './Components/Navbar/NavigationBar';
import Header from './Components/Header/Header';
import { initDB } from './utils/indexedDB';
import CartContext from './Context/Cart-context';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

function App() {
  const ctx = useContext(CartContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const dbPromise = initDB();

    dbPromise.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction('tasks', 'readonly');
      const store = transaction.objectStore('tasks');
      const getAllRequest = store.getAll();

      getAllRequest.onsuccess = () => {
        const tasksFromDB = getAllRequest.result;
        setTasks(tasksFromDB);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    };
  }, []);

  useEffect(() => {
    tasks.forEach(val => {
    
        ctx.addTask(JSON.parse(JSON.stringify(val)));
     
    });
  }, []);
 console.log(typeof(tasks));
 console.log(tasks);
  return (
    <>
 
      <NavigationBar />
      <Header  />
      <Main tasks={tasks} />
      <Footer/>
    </>
  );
}

export default App;
