import React from 'react';
import './TodoCard.css';

const TodoCard = (props) => {
  console.log(props.task);
  return (
    <div className="todo-card">
      <div className="todo-date">{props.task.date}</div>
      <div className="todo-description">{props.task.description}</div>
    </div>
  );
};

export default TodoCard;
