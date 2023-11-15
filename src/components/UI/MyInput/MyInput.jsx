import React from 'react';
import './MyInput.css'

function MyInput(props) {

    return (
        <input className='input' {...props}/>
    );
}

export default MyInput;