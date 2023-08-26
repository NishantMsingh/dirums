import React from 'react';
import "./Main.css"
import TodoCard from './TodoCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CartContext from '../../Context/Cart-context';
import { useContext } from 'react';

const Main = () => {
  const ctx = useContext(CartContext);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If the item was dropped outside of a droppable area
    if (!destination) {
      return;
    }

    // Reorder the tasks in the appropriate column
    const sourceColumn = source.droppableId;
    const destinationColumn = destination.droppableId;

    if (sourceColumn === destinationColumn) {
      // If the item was moved within the same column
      const tasks = [...ctx[sourceColumn]];
      const [movedTask] = tasks.splice(source.index, 1);
      tasks.splice(destination.index, 0, movedTask);

      // Update the state with the new order
      // ctx.updateTasks(sourceColumn, tasks);
      console.log("Task", tasks);
    } else {
      // If the item was moved to a different column
      const sourceTasks = [...ctx[sourceColumn]];
      const destinationTasks = [...ctx[destinationColumn]];

      const [movedTask] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, movedTask);

      // Update the state with the new order in both columns
      // ctx.updateTasks(sourceColumn, sourceTasks);
      // ctx.updateTasks(destinationColumn, destinationTasks);
      console.log("Source Task",sourceTasks);
    }
  };

  return (
    <div className='container-fluid min-height pt-5'>
      <div className="container">
        <DragDropContext onDragEnd={onDragEnd}>
          <div class="row justify-content-center align-items-start max-high g-2">
            {['todos', 'pending', 'completed'].map((column) => (
              <Droppable droppableId={column} key={column}>
                {(provided) => (
                  <div class={`col-lg-3 col-sm-10 col-md-5 shadow border-0 ms-2 rounded ps-2 ${column}`}>
                    <h5 className={`text-${column === 'todos' ? 'primary' : column === 'pending' ? 'secondary' : 'success'} pt-2`}>
                      {column === 'todos' ? 'Tasks to do' : column === 'pending' ? 'In progress' : 'Tasks done'}
                    </h5>
                    <hr/>
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {ctx[column].length > 0 ? (
                        ctx[column].map((val, index) => (
                          <Draggable key={val.id} draggableId={val.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <TodoCard task={val}  css={column}/>
                              </div>
                            )}
                          </Draggable>
                        ))
                      ) : (
                        <h6>No tasks are available</h6>
                      )}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default Main;
