import React from 'react';
import{useState} from 'react';
import './TodoCard.css';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
const TodoCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(false);
  
  }
  const updateHandler=(curTask)=>{
    handleShow();
  }
  return (

    <><div onClick={updateHandler} className={`${props.css} todo-card`}>
      <h6 className="todo-description">{props.task.description}</h6>
      <span className="todo-date"> <span className='fs-6 text-dark bold'> {props.dateText}</span>  {props.task.date}</span>
      
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
          // value={description}
          // onChange={handleDescriptionChange}
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
          // checked={status === 'todo'}
          // onChange={handleStatusChange}
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
          // checked={status === 'pending'}
          // onChange={handleStatusChange}
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
          // checked={status === 'completed'}
          // onChange={handleStatusChange}
        />
        <label htmlFor='completed' className='me-3  mt-2'>
          Completed
        </label>
      </div>

      <div className='mt-2'>
      <label htmlFor="taskDate">Due Date*</label> <br/>
     <input type="date" id="taskDate"  name="taskDate" className='fs-5 input'/>
        
      </div>
    </form>




        </Modal.Body>
        <Modal.Footer className='ms-4 me-4'>
        <Button onClick={handleSubmit}  variant="contained" className='me-2'>Update Task</Button>
        <Button onClick={handleSubmit}  variant="contained">Delete Task</Button>
        </Modal.Footer>
      </Modal>
    </>
    
  );
};

export default TodoCard;
 