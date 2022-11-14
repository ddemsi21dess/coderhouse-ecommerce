import React, { useState, useCallback , useRef } from 'react'


export const SearchBar = () => {
 
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');

  const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        }

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
  }
  const onHandleChange = useCallback(debounce((e) => {   
    setInputValue(inputRef.current.value);
    const searchValue = inputRef.current.value.toLowerCase();

  }, 500), []);

  const onHandleClick = (e) =>{
    inputRef.current.value = '';
    setInputValue(inputRef.current.value);
  };


  return (
    <>
    <div className='search-container'>
        <input className='input-search' placeholder='Buscar' type='text' onChange={onHandleChange} ref={inputRef} ></input>
        <button 
            onClick={onHandleClick}
            className= {inputValue.length === 0 ? 'clean-button-disabled' : 'clean-button'}     
            disabled ={ inputValue.length === 0 ? true : false }>X</button>
    </div>
    </>
  )
}
