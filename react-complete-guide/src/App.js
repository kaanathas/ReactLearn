import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {

  state={
    person:[
        {id:'1', name:'kaana', age:26},
        {id:'2',name:'mathu',age:'27'}

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

nameChangeHandler=(event,id)=>{
  const personIndex=this.state.person.findIndex(p=>{ return p.id===id;}) 

  const person={ ...this.state.person[personIndex]}

  person.name=event.target.value;

  const persons=[...this.state.person]

  persons[personIndex]=person;
  this.setState({person:persons})
}

togglePersonHandler=()=>{
  const doesShow=this.state.showPerson;
  this.setState({
    showPerson:!doesShow
  });
}

deletepersonhandler=(personIndex)=>{
  // const persons=this.state.person.splice();
  const persons=[...this.state.person]
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
                  key={per.id}  
                  click={()=>this.deletepersonhandler(index)} 
                  name={per.name} 
                  age={per.age}
                  changed={(event)=>this.nameChangeHandler(event,per.id) }/>
    
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
