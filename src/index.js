import React from 'react';
import { render } from 'react-dom';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};


const Todo = (props) =>(
  <div>
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle}/>
    <span>{props.todo.text}</span>
    <button onClick={props.onRemove}>Delete</button>
  </div>
)


let id = 0

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      todos : [],
    }
  }

  addTodo(){
    const text = prompt("Introduce task")
    this.setState(
      {
        todos:[...this.state.todos, {
          text:text,
          id: id++,
          checked:false,
        }]
      }
    )
  }

  removeTodo (id){
    this.setState(
      {
        todos : this.state.todos.filter((todo) => todo.id !== id)
      }
    )
  }

  toggleTodo(id){
    this.setState(
      {
        todos : this.state.todos.map((todo) =>{
          if (todo.id !== id) return todo
          return {
            text : todo.text,
            id : todo.id,
            checked : !todo.checked,
          }
        })
      })
  }

  render(){
    return(
      <div>
        <h1>Todo App</h1>
        <button onClick={() => this.addTodo()}>Add todo</button>
        <ul>
          {this.state.todos.map((todo)=>(
              <Todo
                todo={todo}
                onRemove = {() => this.removeTodo(todo.id)}
                onToggle = {() => this.toggleTodo(todo.id)}
              />
            ))}
        </ul>
        <p>Unchecked :{this.state.todos.filter(todo => !todo.checked).length}</p>
        <p>Total : {this.state.todos.length}</p>
      </div>
    )
  }
}

render(<App/>, document.getElementById('root'))
