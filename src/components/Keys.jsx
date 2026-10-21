import { useState } from "react"
import "../components/ToDo.css"
import { MdDeleteForever, MdCheck } from "react-icons/md";

export const Keys = () =>{
    
    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])

    const handleChange = (value)=>{
        setInputValue(value)
        console.log(inputValue)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!inputValue)return
        if(task.includes(inputValue))return

        setTask((prevTask) => [...prevTask, inputValue])
        
            
        
        setInputValue("")
        
    }
    
    console.log(task)

    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>

            <section id="form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input onChange={(e)=>handleChange(e.target.value)}
                        value={inputValue}
                        autoComplete="off"
                        type="text" />
                        
                    </div>
                    <div>
                        <button className="todo-btn" type="submit">Add Task</button>
                    </div>
                </form>
            </section>

            <section className="myUnOrdList">
                <ul className="todo-list">
                    {task.map((curTask,index)=> {
                        return(
                            <TodoItems
                            key={index}
                            data={curTask}
                            />
                        )
                    })}
                </ul>
            </section>

        </section>
    )
}

 const TodoItems = ({data,index}) =>{

    return(
        <li key={index}
        className="todo-item">
            <span>{data}</span>
             <input  type="text" />                  
            <button className="delete-btn">
                <MdDeleteForever/>
            </button>
        </li>
    )
 }