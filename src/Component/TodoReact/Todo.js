import React from 'react'
import "./Style.css";

const Todo = () => {
  return (
    <div className='main-div'>
        <div className='chile-div'>
            <figure>
                <img src="./images/burg.jpg" alt='todoimage' />
                <figcaption>Add Your ToDo List Here ✌</figcaption>
            </figure>
            <div className='addItems'>
                <input type="text" placeholder=' ✍ Add Items' className='form-control'/>
            </div>
        </div>
      
    </div>
  )
} 
export default Todo
