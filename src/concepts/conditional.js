import React, { Component } from 'react';
import Counter from './counter';
 
class Conditional extends Component {
     state = {
          count:  0,
       tags: ["Dev", "rattan", "paswan"],
  }  
  //prop vs state
  //props is only read property we can not change it 
  //props include the data that we give the component but state include the data that local or private to the component so other component cannot acess this state 
     renderTags() {
         if (this.state.tags.length === 0) return <p>There is no tags </p>
         return (
           <ul>
             {this.state.tags.map((tag) => (
               <li key={tag}>{tag}</li>
             ))}
           </ul>
         );
    }
    //Handle  Increament  
    //  constructor() {
    //     super()
    //   this.handleCount =this.handleCount.bind(this)
    // }
    // handleCount() {
    // //here this is undefined bcz
    // //obj.method() -> here this is ref the obj 
    // //if only function() -> here this is ref the window object if strict mode is enable then this is undefine
    // //so here we need to bind this
    //  console.log("this is the" ,this) //now what ever this it will ref the current object 
    // }
    
     // bcz it look like handi so insteed of this we use the  fat arrow fun when u use this no need to bind this 
    handleCount = () => {
    // in react u dont update the state direclty like this
     //this.state.count++ -> in react to update the state use setstate 
       this.setState({count: this.state.count + 1 })   
     }
  render() { 
      
        return (
          <React.Fragment>
            {this.renderTags()}
            {this.state.count}
            <button onClick={this.handleCount}>Increament</button>
            <Counter key={this.state.tags} value={this.state.tags } />
          </React.Fragment>
        );
    }
 }
  
 export default Conditional;
