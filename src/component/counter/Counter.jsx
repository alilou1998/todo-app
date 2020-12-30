import React, { Component } from 'react'
import './Counter.css'
//import CounterButton from './CounterButton'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.reset=this.reset.bind(this)
    }

    render() {
        return (
            <div className="container" >
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <button className="btn btn-info" onClick={this.reset}>Reset</button><br></br>
                <span>{this.state.counter}</span>
            </div>
        );
    }
    increment(by) {
        //console.log("increment of the Counter")
        this.setState(
            {
                counter: this.state.counter + by
            }
        )
    }
    decrement(by) {
        this.setState(
            {
                counter: this.state.counter - by
            }
        )
    }

    reset(){
        this.setState(
            {
                counter:0
            }
        )
    }
}


class CounterButton extends Component {
    //Define the state in a constructor
    /* constructor() {
        super() */
        /* this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement=this.decrement.bind(this) */
    // }
    render() {
        return (
            <div className="CounterButton">
                <button className="btn btn-success" onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button className="btn btn-danger" onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                
            </div>
        )
    }
    /* increment() {
        //update the state
        this.setState(
            {
                counter: this.state.counter + this.props.by

            }
        )
        this.props.incrementMethod(this.props.by)

        //console.log(this.state)

    }
    decrement() {
        //update the state
        this.setState(
            {
                counter: this.state.counter - this.props.by
            }
        )
        this.props.decrementMethod(this.props.by)

        //console.log(this.state)

    } */

}


export default Counter
