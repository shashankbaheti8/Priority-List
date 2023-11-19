import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log(todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    // console.log(title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
   <>
      <Router>
        <Header title="priorityLists" />
        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }/>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
    );
}

export default App;
