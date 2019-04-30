import React,{Component} from 'react';
import { connect } from 'react-redux'

class Counter extends Component {
    
    
    constructor () {
        super() 
    }



    render() {
        return (
            <div>
                <p>{this.props.ctr}</p>
                <button onClick={() => this.props.incrementCounter()}>Increment The Count</button>
                <button onClick={() => this.props.decrementCounter()}>Decrement The Count</button>
                <button onClick={() => this.props.addTen()}>Add 10</button>
                <button onClick={() => this.props.subtractTen()}>Subtract 10</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        return {
            ctr: state.counter
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: () => dispatch({type: 'INC_COUNTER'}),
        decrementCounter: () => dispatch({type: 'DEC_COUNTER'}),
        addTen: () => dispatch({type: 'add_Ten'}),
        subtractTen: () => dispatch({type: 'subtract_Ten'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)