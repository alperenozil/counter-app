import React, { Component } from 'react'

export class Counter extends Component {
    state={ count: 0 };
    render() {
        return (
            <div>
                <span>{this.formatCount()}</span>
                <button>increment</button>
            </div>
        )
    }
    formatCount(){
        const { count }=this.state;
        return count === 0 ? "zero" : count;
    }
}

export default Counter
