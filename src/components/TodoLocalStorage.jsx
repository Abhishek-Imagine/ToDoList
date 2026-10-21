
const todoKey = "reactTodo"

export  const setLocalStorageTodo = (task)=>{
    return localStorage.setItem(todoKey, JSON.stringify(task))
}

export const getLocalStorageTodo = () =>{
    const todo = localStorage.getItem(todoKey)

    if(!todo)return []

    return JSON.parse(todo)
}














// const todoKeys = "reactTodo"

// export const setLocalStorageTodo = (task)=>{

//     return localStorage.setItem(todoKeys, JSON.stringify(task))

// }

// export const getLocalStorageTodo = ()=>{

//     const todo = localStorage.getItem(todoKeys)

//     if(!todo) return []

//     return JSON.parse(todo)
// }