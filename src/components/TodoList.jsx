import { useState } from "react"
import "../components/ToDo.css"
import { FormHandle } from "./FormHandle"
import { TodoItems } from "./TodoItems"
import { getLocalStorageTodo, setLocalStorageTodo } from "./TodoLocalStorage"
import { TodoDate } from "./TodoDate"

export const TodoList = ()=> {

    const [task, setTask] = useState(()=> getLocalStorageTodo())

    const handleParentSubmit = (inputValue)=>{
        const {id, content, checked} =  inputValue

        if(!content) return

        const matchedTask = task.find((curTask) => curTask.content === content)

        if(matchedTask) return alert("This content is already exist")

        setTask((prevTask)=> {
            return [...prevTask, {id,content,checked}]
        })
        console.log(task)
    }

    setLocalStorageTodo(task)

    const handleDeleteBtn = (value) => {
        const deleteTask = task.filter((curTask) => curTask.content !== value)
        setTask(deleteTask)
    }

    const handleCheckedBtn = (value)=>{
        const checkedTask = task.map((curTask)=> {
            if(curTask.content === value){
                return {...curTask, checked: !curTask.checked}
            }else{
                return curTask
            }
        })
        setTask(checkedTask)
    }

    const handleClear = ()=>{
        setTask([])
    }

    return(
        <section className="todo-container">
            <header>
                <h1>Todo - List</h1>
                <TodoDate />
            </header>

        <FormHandle onAddSubmit={handleParentSubmit} />

        <section className="MyUnOrdlist">
            <ul>
                {task.map((curTask) => {
                    return(
                        <TodoItems 
                                   key={curTask.id}
                                   checked={curTask.checked}
                                   data={curTask.content}
                                   onHandleDeleteBtn={handleDeleteBtn}
                                   onHandleCheckedBtn={handleCheckedBtn}
                                   />
                    )
                })}
            </ul>
        </section>

        <button onClick={handleClear}
         className="clear-btn">
            Clear
        </button>

        </section>
    )
}