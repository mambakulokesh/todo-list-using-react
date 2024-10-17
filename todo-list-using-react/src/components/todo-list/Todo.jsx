import "./Todo.css";
import { useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState("");

  const [items, setItems] = useState([]);

  const addItem = () => {
    if (todoList.trim() !== "") {
      setItems([...items, todoList]);
      setTodoList("");
    }
  };

  const RemoveItem = (index) => {
    const filteredItems = items.filter((_, i) => i !== index);
    setItems(filteredItems);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: "35rem" }}>
        <div className="card-body text-center">
          <h5 className="card-title fs-3">Todo List</h5>
          <input
            type="text"
            className="form-control mb-3 p-2"
            placeholder="enter your task"
            value={todoList}
            onChange={(event) => {
              setTodoList(event.target.value);
            }}
          />
          <button onClick={addItem} className="btn btn-info px-4">
            Add
          </button>
        </div>

        <ul className="list-group">
          {
          items.map((item, index) => {
            return (
              <li key={index} className="list-group-item px-3 py-1" style={{fontSize : "19px"}}>
                {item} 
                <button className="btn btn-warning px-3 float-end">Edit</button>
                <button onClick={()=>{
                    RemoveItem(index)
                }} className="btn btn-danger px-3 float-end me-3">Remove</button>
              </li>
            );
          })
          }
        </ul>
      </div>
    </div>
  );
}

export default Todo;
