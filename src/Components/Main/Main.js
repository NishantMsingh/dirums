import React from 'react';
import "./Main.css"
import TodoCard from './TodoCard';
import CartContext from '../../Context/Cart-context';
import { useContext } from 'react';

const Main = (props) => {
   const ctx = useContext(CartContext);
  console.log(ctx.all);
   return (
     <div className='container-fluid min-height pt-5'>
       <div className="container">
         <div class="row justify-content-center align-items-center g-2">
           <div class="col-lg-3 col-sm-10 col-md-5 shadow border-0 ms-1 rounded ps-2">
             <h5 className='text-primary  pt-2'> Tasks to do </h5>
             <hr/>
             {props.tasks.length > 0 ? (
                props.tasks.map(val => (
                 <TodoCard key={val.id} task={val} />
               ))
             ) : (
               <h6>No tasks are available to do</h6>
             )}
           </div>
           <div class="col-lg-3 col-sm-10 col-md-5 shadow border-0 ms-1 rounded ps-2">
             <h5 className='text-secondary  pt-2'> In progress </h5>
             <hr/>
             {props.tasks.length > 0 ? (
                props.tasks.map(val => (
                 <TodoCard key={val.id} task={val} />
               ))
             ) : (
               <h6>No tasks are in progress</h6>
             )}
           </div>
           <div class="col-lg-3 col-sm-10 col-md-5 shadow border-0 ms-1 rounded ps-2">
             <h5 className='text-success pt-2'> Tasks done </h5>
             <hr/> 
             {props.tasks.length > 0 ? (
               props.tasks.map(val => (
                 <TodoCard key={val.id} task={val} />
               ))
             ) : (
               <h6>No tasks are completed</h6>
             )}
           </div>
         </div>
       </div>
     </div>
   );
}

export default Main;