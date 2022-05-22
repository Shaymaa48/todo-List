import React from 'react'
import Icon from '@mui/material/Icon';

const TodoList = ({todos, setTodos}) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {...item, completed: !item.completed};
                }
                return item;
            })
        );
     };

    const handleDelete = ({id}) => {
       setTodos(todos.filter((todo) => todo.id !== id));
    };

  return (
    <div>
      {todos.map((todo) => (
       
       <li className='list-item' key={todo.id}>
           <input 
           type="text" 
           value={todo.title}
           className={`list ${todo.completed ? "complete" : ""}`} 
           onChange={(event) => event.preventDefault()}
           />

           <div>
               <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                <Icon>check</Icon>
               </button>
               <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                 <Icon>close</Icon>
               </button>
              

           </div>
       </li>

      ))}
    </div>
  );
};

export default TodoList