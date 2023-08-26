import React from 'react';
import './TodoCard.css';

const TodoCard = (props) => {

  const UpdateHandler=(task)=>{
    alert("Update Handler");
      }
  return (
    <div onClick={()=>{UpdateHandler(props.task)}} className={`${props.css} todo-card`}>
      <h6 className="todo-description">{props.task.description}</h6>
      <span className="todo-date"> <span className='fs-6 text-dark bold'> {props.dateText}</span>  {props.task.date}</span>
      
    </div>
  );
};

export default TodoCard;
 