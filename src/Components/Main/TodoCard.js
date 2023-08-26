import React, { useContext } from 'react';
import{useState} from 'react';
import './TodoCard.css';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
import CartContext from '../../Context/Cart-context';
const TodoCard = (props) => {
  const ctx=useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(false);
  }  
  const [description, setDescription] = useState(''); 
  const [status, setStatus] = useState('todo'); 

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const [date,setDate] =useState("dd-mm-yyyy");
  const updateHandler=(curTask)=>{
    handleShow();
    console.log(curTask);
    setDescription(curTask.description);
    setDate(curTask.date);
    setStatus(curTask.status);

  }

  const taskUpdateHandler = () => {
    
    const updatedTask = {
      ...props.task,
 
      description,
      status,
      date
  
    };
  
   
    const storedData = JSON.parse(localStorage.getItem("tasks"));
    if (storedData) {
      const taskIndex = storedData.findIndex((task) => task.id === props.task.id);
      if (taskIndex !== -1) {
        storedData.splice(taskIndex, 1, updatedTask);
        localStorage.setItem("tasks", JSON.stringify(storedData));
      }
    }
  

    ctx.updateTask(updatedTask,props.task);
   
  
    handleClose();
    alert("Task Updated");
  };
  
  const taskDeletehandler=()=>
  {   
    const storedData = JSON.parse(localStorage.getItem("tasks"));
    if (storedData) {
      const taskIndex = storedData.findIndex((task) => task.id === props.task.id);
      if (taskIndex !== -1) {
        storedData.splice(taskIndex, 1, props.task.id);
        localStorage.setItem("tasks", JSON.stringify(storedData));
      }
    }

    ctx.deleteTask(props.task);
    handleClose();
    alert("Deleted Task");
  }

  return (

    <><div onClick={()=>{updateHandler(props.task)}} className={`${props.css} todo-card`}>
      <h6 className="todo-description">{props.task.description}</h6>
      <span className="todo-date"> <span className='fs-6 text-dark bold'> Date:</span>  {props.task.date}</span>
      
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header className='ms-4 me-4'>
          <h3>Edit the task for the team </h3>
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
          value='pending'
          checked={status === 'pending'}
          onChange={handleStatusChange}
        />
        <label htmlFor='pending' className='me-3'>
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
     <input type="date" id="taskDate" value={date}  name="taskDate" className='fs-5 input'/>
        
      </div>
    </form>




        </Modal.Body>
        <Modal.Footer className='ms-4 me-4'>
        <Button onClick={taskUpdateHandler}  variant="contained" className='me-2'>Update Task</Button>
        <Button onClick={taskDeletehandler}  variant="contained">Delete Task</Button>
        </Modal.Footer>
      </Modal>
    </>
    
  );
};

export default TodoCard;
 