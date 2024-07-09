import React ,{useState} from 'react'
import './Todo.css'
function TodoList() {
    const [newtodo, setNewTodo] = useState([]);
  const handleAddClick = () => {
    let inputTxt = document.querySelector("#todo_input").value;
    setNewTodo((n) => [...n, inputTxt]);
    document.querySelector("#todo_input").value = "";
  };
  const handleRemoveClick = (index) => {
    setNewTodo((n) => n.filter((_, i) => i !== index));
  };
  return (
   

    <div id="todo_app">
      <h1>TodoList</h1>
      <input type="text" id="todo_input" placeholder="Write Todo Here" />
      <button id="Add_btn" onClick={handleAddClick}>
        Add
      </button>
      <ol> 
        <div id="flx_grp">
          {newtodo.map((element, index) => (
            <>
           <div> <li key={index}>
              {element}
              <button id="remove_btn" onClick={() => handleRemoveClick(index)}>
             Remove
           </button>
            </li></div>
           </>
          ))}
        </div>
      </ol>
    </div>
  )
}

export default TodoList
