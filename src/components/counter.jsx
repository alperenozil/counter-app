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
                <span className={this.badgeStyling()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">increment</button>
            </div>
        )
    }
    badgeStyling() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const { count }=this.state;
        return count === 0 ? "zero" : count;
    }
}

export default Counter
