import { useEffect, useState } from 'react';

export const Todo = ()=>{

    const[todoList,setTodoList] = useState([])
    const[input,setInput] = useState("")

    const task = (e)=>{
     

    }

    const addTask = ()=>{
       setTodoList([...todoList,input])

    }

    return(
        <div>
            <div>
                <input onChange={task}></input>
                <button onClick={addTask}>add task</button>
            </div>
            <div className='listeee'>

            </div>
            {input}
            {todoList}
           
        </div>
    )
}

export default Todo