import React, { useContext, useEffect, useRef, useState } from 'react'
import classes from "./Navbar.module.css";
import { HiOutlinePlus } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import dev from "../../Assets/IMG_8191.jpg"
import CartContext from '../../Context/Cart-context';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const date =useRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const ctx = useContext(CartContext);
  const [display, setDisplay] = useState(true);


  useEffect(() => {
 

    if (window.innerWidth <= 768) {
      setDisplay(prev => !prev);
    }
  }, [ctx]);

  const MenuHandler = () => {
    ctx.menuToggle();
  }


  const [description, setDescription] = useState(''); 
  const [status, setStatus] = useState('todo'); 

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(false);
  
    let task = {
    
      date: date.current.value,
      status,
      description
    };
  

    if (localStorage.getItem("tasks")) {
      task={...task,id:""+JSON.parse(localStorage.getItem("tasks")).length}
      let current = [task, ...JSON.parse(localStorage.getItem("tasks"))];
      localStorage.setItem("tasks", JSON.stringify(current)); 
      alert("Task added successfully");
      date.current.value="";
      setStatus("todo");
      setDescription("");
    } else {
      let current = [];
      task={...task,id:"1"}
      current.push(task);
      localStorage.setItem("tasks", JSON.stringify(current)); 
      alert("Task added successfully");
      date.current.value="";
      setStatus("todo");
      setDescription("");
    }
  };
    
  return (
    <>
      <nav className='contaner-fluid bg-light  m-0'>
        <div className='container custom-width'>
          <ul className={display ? `${classes.nav} none` : classes.nav}>


            <li className={`${classes.lists} d-flex gap-2`}>
              <span className={classes.cross} onClick={MenuHandler}> <RxCross2 fontSize={"1.8rem"} />  </span>
              <span class={classes.createTask} onClick={handleShow}> <HiOutlinePlus className='me-2' color='white' />  Create Task </span>
              <span class={classes.searchQuery}> <input type="text" placeholder='search your query' className='w-100' /> <button><BiSearch color='white' fontSize={"1.4rem"} /></button>  </span>
            </li>

            <li className={`${classes.profile} d-flex flex-row gap-2`}>


              Nishant Kumar | React Developer

              <img src={dev} class={classes.dev} alt="" />

            </li>

          </ul>
        </div>
      </nav>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='ms-4 me-4'>
          <h3>Create a task for the team </h3>
        </Modal.Header>



        <Modal.Body className='ms-4 me-4'>
      


 
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='description'>
          Add task description*
        </label>
        <br />

        <textarea
          className='rounded'
          rows='6'
          cols='50'
          name='description'
          placeholder='Feed the task guidelines and information'
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      <div className='taskStatus'>
        <label htmlFor='taskStatus'>Task Status:</label> <br />

        <input
          type='radio'
          id='todo'
          className='me-1'
          name='status'
          value='todo'
          checked={status === 'todo'}
          onChange={handleStatusChange}
        />
        <label htmlFor='todo' className='me-3 mt-2'>
          To do
        </label>

        <input
          type='radio'
          id='progress'
          className='me-1'
          name='status'
          value='progress'
          checked={status === 'progress'}
          onChange={handleStatusChange}
        />
        <label htmlFor='progress' className='me-3'>
          Progress
        </label>

        <input
          type='radio'
          id='completed'
          className='me-1'
          name='status'
          value='completed'
          checked={status === 'completed'}
          onChange={handleStatusChange}
        />
        <label htmlFor='completed' className='me-3  mt-2'>
          Completed
        </label>
      </div>

      <div className='mt-2'>
      <label htmlFor="taskDate">Due Date*</label> <br/>
     <input type="date" id="taskDate" ref={date} name="taskDate" className='fs-5 input'/>
        
      </div>
    </form>




        </Modal.Body>
        <Modal.Footer className='ms-4 me-4'>
        <Button onClick={handleSubmit}  variant="contained">Create Task</Button>
        </Modal.Footer>
      </Modal>
    </>


  )
}

export default NavigationBar
