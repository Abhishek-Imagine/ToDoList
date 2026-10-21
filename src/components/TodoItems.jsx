 import { MdDeleteForever, MdCheck } from "react-icons/md";


 export const TodoItems = ({data,checked,onHandleDeleteBtn,onHandleCheckedBtn})=> {

    return(
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>

            <button className="check-btn">
                <MdCheck  
                         onClick={()=> onHandleCheckedBtn(data)}
                    />
            </button>

            <button className="delete-btn">
                <MdDeleteForever 
                                onClick={()=> onHandleDeleteBtn(data)}
                />
            </button>

        </li>
    )
 }