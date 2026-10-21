import { useState } from "react"


export const FormHandle = ({onAddSubmit}) => {

    const [inputValue, setInputValue] = useState({})

    const handleChange = (value)=>{
        setInputValue({id:value, content: value, checked:false})
        console.log(inputValue)
    } 

    const handleSubmit = (e)=>{
        e.preventDefault()
        onAddSubmit(inputValue)
        setInputValue({id:"", content:"", checked:false})
    }

    return(
        <section className="form">
            <form onSubmit={handleSubmit}>
                <input 
                      onChange={(e)=> handleChange(e.target.value)}
                      value={inputValue.content}
                      autoComplete="off"
                      className="form-input"
                      type="text" 
                      />

                    <div>
                        <button type="submit">Add Task</button>
                    </div>
            
            </form>
        </section>
    )
}