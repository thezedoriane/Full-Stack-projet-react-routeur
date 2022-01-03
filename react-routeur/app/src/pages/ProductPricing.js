import React,{useState} from "react";

import Todo from '../pages/todo';
import List from '../pages/list';

const initialFormData = Object.freeze({
  title: "",
  price:"",
  stock:"",
  description: "",
  done: false,
  id : Math.ceil(Math.random() * 10000)
});



function ProductPricing() {
  
  const [formData, updateFormData] = useState(initialFormData);

  const [todos, addTodos] = useState([]);
  
  return (
    
    <div>
      
      <Todo todos={todos} addTodos={addTodos} formData={formData} updateFormData={updateFormData}/>
      <List todos={todos} setTodos={addTodos}/>
    </div>
    

  );
}

export default ProductPricing;