import React, { Component } from 'react'
 
class Counter extends Component {
    render() {
      // i.e props me value parrent se child me bhejate h
      return (
        <div>
          <span>1</span>
           <button className="btn btndangers sm m-2">Increament </button>
        </div>
      )
    }
}
 
export default Counter;