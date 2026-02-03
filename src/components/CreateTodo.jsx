import { useRef } from "react"

export default function CreateTodo({addNewTodo}) {

    const newTodo = useRef("");


    const handleNewTodo = () => {
        console.log(newTodo.current.value);
        addNewTodo(newTodo.current.value)
    }

    return (
        <div className="min-w-1/3 p-5 border-2 rounded-md gap-2 disp">
            <input className="w-xs"
                type="text"
                name='todo'
                placeholder="Enter New Todo..."
                ref={newTodo}/>
            <button onClick={handleNewTodo} >ADD</button>
        </div>
    )
}