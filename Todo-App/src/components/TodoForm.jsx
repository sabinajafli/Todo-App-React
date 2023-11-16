import React from 'react'
import { useState } from 'react';
import '../index.css'

export default function ( {onAddTodo} ) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() !== '') {
            onAddTodo(inputValue.trim());
            setInputValue('');
        }
    }

  return (
    <div className='input-wrapper'>
        <input type='text' value={inputValue} onChange={handleChange} placeholder='Add a todo...'/>
        <button onClick={handleSubmit}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></button>
    </div>
  )
}

