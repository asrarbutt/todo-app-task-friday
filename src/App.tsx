import React, {useEffect, useState} from 'react';

import './App.css';
import Todos from "./components/Todos";
import {Todo} from "./Todo";
import {getAllTodos} from "./service/Service";
import {TodoStatus} from "./TodoStatus";
import Home from "./components/Home";


function App() {

    const [todos, setTodos]=useState<Todo[]>([{id:"1", description:"hallo", status:TodoStatus.OPEN}]);

    useEffect(()=>{

       getAllTodos().then(data=> {

               setTodos( data);
           console.log(data)
           }

       );



    },[])



  return (
    <div className="App">
      <Todos/>
        <Home todos={todos}/>



    </div>
  );
}

export default App;
