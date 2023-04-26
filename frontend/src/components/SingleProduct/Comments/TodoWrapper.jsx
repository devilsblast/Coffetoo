import React,{useState,useEffect} from 'react'
import { TodoForm } from './TodoForm'
 import useFetch from '../../../hooks/useFetch';
import { Todo } from './Todo';
import { ETF } from './ETF';




   

export const TodoWrapper = ({idd , nama}) => {
     
const URL = `http://localhost:1337/api/comments?populate=*?&[filters][product][id]=${idd}`;
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState(0);
    const {loading, error, dataser} = useFetch(URL);



     
if(loading){
    console.log("loading...")
}
else if(error !== null){
    console.log("error")
}
else{
console.log("clear")
if(status === 0){
    setTodos(dataser?.data);
    console.log(dataser?.data)
setStatus(status+1);
}
console.log(status)

const addTodo = async(value) => {
const fr = {
    name : nama + " comment",
    description : value,
    product :{
        connect:[idd]
    }

}
    try{
         const res = await fetch("http://localhost:1337/api/comments",{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({data : fr})
    })
    const datas = await res.json();
    setTodos([...todos, datas.data])
}
catch(error){
    console.log("adding error")
}
}


const deleteTodo = async(id) => {
    try{
        const ress = await fetch(`http://localhost:1337/api/comments/${id}`,{
            method : "DELETE"
        })
        const dataa = await ress.json();
        console.log(dataa);
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    catch(error){
        console.log("DELETE ERROR")
    }
}

const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, attributes : {...todo.attributes,isediting: !todo.attributes.isditing} } : todo
      )
    );
  }


const editTask = async(des, id) => {
    const frr = {
        description : des
    }
    try{
const res = await fetch(`http://localhost:1337/api/comments/${id}`,{
method : "PUT",
headers : {
    "Content-Type" : "application/json"
},
body : JSON.stringify({data:frr})
})
 const datas = await res.json();
 console.log(datas);

    setTodos(
      todos.map((todo) =>
        todo.id === id ? datas?.data : todo
      )
    );
}catch(error){
    console.log("edit error");
}
  };

return (
   
    
    <div>
        <TodoForm  addTodo={addTodo}/>
{todos.slice().reverse().map((todo) => todo.attributes.isediting ? (
<ETF key={todo.id} editTodo={editTask}  task={todo}/>) 
:
    (<Todo 
            key={todo.id}
            task={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />)
)}
    </div>
        
    )
}
}