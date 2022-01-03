import React from 'react';
import '../pages/todo.css';



function Todo({todos, addTodos, formData, updateFormData}) {

    const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        addTodos([
            ...todos,
            {title:formData.title, price: formData.price,stock: formData.stock, description: formData.description, done : false, id: Math.ceil(Math.random() * 10000)}
        ])
        // ... submit to API or something

    };

    return (

        <div>
            <form>
                <label for="title">Title_book:</label><br/>
                <input type="text" id="title" name="title" onChange={handleChange}/><br/><br/>

                <label for="price">Price:</label><br/>
                <input type="number" id="price" name="price" onChange={handleChange}/><br/><br/>

                <label for="stock">Stock:</label><br/>
                <input type="number" id="stock" name="stock" onChange={handleChange}/><br/><br/>

                <label for="description">Description:</label><br/>
                <input type="text" id="description" name="description" onChange={handleChange}/><br/><br/>

                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </form>

        </div>

    )
}

export default Todo;