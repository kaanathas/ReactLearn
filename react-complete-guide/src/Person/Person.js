import React from 'react';


const person=(props)=>{
    return(
        <div>
 <p> i'm a Person {props.name}</p>
        <p>{props.children}a</p>   
        <input type='text' onChange={props.changed } value={props.name}></input>
        </div>
        
       
        )
}

export default person;