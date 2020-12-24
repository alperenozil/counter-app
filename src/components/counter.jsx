import React, { Component } from 'react'

export class Counter extends Component {
    state={ 
        count: 0,
        imageUrl:"https://picsum.photos/200"
    };
    styles={
        fontSize:20,
        fontWeight:"bold",
        borderRadius:12,
    };
    render() {
        return (
            <div>
                <img src={this.state.imageUrl} alt=""></img>
                <p></p>
                <span style={{fontSize:30}} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button style={this.styles} className="btn btn-secondary btn-sm">increment</button>
            </div>
        )
    }
    formatCount(){
        const { count }=this.state;
        return count === 0 ? "zero" : count;
    }
}

export default Counter
