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
  render() {
    return (
      <div className="App">
      <h1>Hi i am kaana</h1>
      <button onClick={this.togglePersonHandler}>switch name</button>
      {this.state.showPerson ===true?  <div>
      <Person name={this.state.person[0].name} age={this.state.person[0].age} />
      <Person changed={this.nameChangeHandler }
      name={this.state.person[1].name}  age={this.state.person[1].age} >My hobbies</Person>
      </div>:null}
     
     
      </div>
    );
  }
}

export default App;
