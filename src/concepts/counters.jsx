import React, { Component } from 'react'
import Counter from './counter';
class Counters extends Component {
    state = [
        {id:1, value:4},
        {id:2, value:14},
        {id:3, value:2},
        {id:4, value:5},
    ] 
    render() { 
        return (
            <div>
            <Counter/>
            </div>
        );
    }
}
 
export default Counters;