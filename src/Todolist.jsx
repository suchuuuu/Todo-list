import { useState } from 'react';

const todoList = () => {
    const [task, setTasks]=useState([]);
    const[newTask, setNewtask]=useState('');

    const handleInput=((e)=>{
        setNewtask(e.target.value);       
    })

    const addTask=(()=>{
        if (newTask.trim() !== ""){
        setTasks(t=>[...t, newTask]);
        setNewtask("");
        }
    })

    const deleteTask=((index)=>{
        setTasks(task.filter((_, i)=> i!==index));
        
    })

    const moveTaskup=((index)=>{
        if(index>0){
            const updatedtask=[...task];
            [updatedtask[index], updatedtask[index-1]]=[updatedtask[index-1],updatedtask[index]];
            setTasks(updatedtask);
        }
        
    })
    const moveTaskdown=((index)=>{
        if (index < task.length - 1) {
            const updatedtask=[...task];           
            [updatedtask[index], updatedtask[index+1]]=[updatedtask[index+1],updatedtask[index]];
            setTasks(updatedtask);
        }
        
    })

    return ( 
        <div className="todo-list">
            <h1>Todo list</h1>

            <div>
                <input
                type='text'
                placeholder='Enter your task....'
                value={newTask}
                onChange={handleInput}
                />
                <button className="add-button"
                onClick={addTask}>Add</button>

            </div>

            <ol>
                {task.map((tasks,index) => 
                    <li className="task" key={index}>
                        <span className='todotask'>{tasks}</span>
                        <button className='delete-btn'
                        onClick={()=> deleteTask(index)}>Delete
                        </button>
                        <button className='move-btn'
                        onClick={()=> moveTaskup(index)}>⬆️
                        </button>
                        <button className='move-btn'
                        onClick={()=> moveTaskdown(index)}>⬇️
                        </button>                 
                    </li>

                )}

            </ol>
        </div>

        

     );
}
 
export default todoList;