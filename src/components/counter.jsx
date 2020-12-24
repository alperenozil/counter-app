import React, { Component } from 'react'

export class Counter extends Component {
    state={ 
        count: 0,
        tags:[]
    };
    checkTagsLength(){
        if (this.state.tags.length===0) return <p>There is no element to display</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>
    }
    incrementCount=productId=>{
        console.log(productId.id);
        this.setState({count: this.state.count+1});
    }
    render() {
        return (
            <div>
                <span className={this.badgeStyling()}>{this.formatCount()}</span>
                <button onClick={ () => this.incrementCount({id:this.state.count})} className="btn btn-secondary btn-sm">increment</button>
                {this.checkTagsLength()}
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
