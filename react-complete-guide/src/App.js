import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {

  state={
    person:[
        {name:'kaana', age:26},
        {name:'mathu',age:'27'}

    ],
    showPerson:false 
  }

switchNameHandler=()=>{
console.log('clicked')
// this.state.person[0].name='kaanathas'

this.setState({
  person:[
    {name:'kaanathas', age:26},
    {name:'mathushana',age:'27'}

]
})
}

nameChangeHandler=(event)=>{
  this.setState({
    person:[
      {name:'kaanathas', age:26},
      {name: event.target.value,age:'27'}
  
  ]
  })
}

togglePersonHandler=()=>{
  const doesShow=this.state.showPerson;
  this.setState({
    showPerson:!doesShow
  });
}

deletepersonhandler=(personIndex)=>{
  const persons=this.state.person;
  persons.splice(personIndex,1);
  this.setState({
    person:persons
  })
}

render() {

let person=null;

if(this.state.showPerson===true){
  person=(

   
    <div>
       {this.state.person.map((per,index)=>{
         return <Person 
         click={()=>this.deletepersonhandler(index)} 
         name={per.name} 
         age={per.age}
         changed={this.nameChangeHandler }></Person>
       })}
    {/* <Person name={this.state.person[0].name} age={this.state.person[0].age} />
    <Person 
    name={this.state.person[1].name}  age={this.state.person[1].age} >My hobbies</Person> */}
    </div>
  )
}
    return (

      <div className="App">
      <h1>Hi i am kaana</h1>
      <button onClick={this.togglePersonHandler}>switch name</button>
      {person}
     

     
      </div>
    );
  }
}

export default App;
