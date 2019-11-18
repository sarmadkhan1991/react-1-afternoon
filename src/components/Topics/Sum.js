import React, { Component } from 'react';


export default class Sum extends Component {
    constructor () {
        super() 
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    handleChange (val) {
        this.setState ( { number1: val } );
    }

    handleChange2 (val) {
        this.setState ( { number2: val } );
    }

    sum (num1, num2) {
        let sum = parseInt(num1) + parseInt(num2);
        this.setState ( { sum: sum } );
    }

    render () {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={ (e) => { this.handleChange ( e.target.value ) } }/>
                <input className='inputLine' onChange={ (e) => { this.handleChange2 ( e.target.value ) } }/>
                <button className='confirmationButton' onClick={ () => this.sum ( this.state.number1, this.state.number2 ) }>Add</button>
                <span className='resultsBox'>Sum: { JSON.stringify( this.state.sum ) } </span>

            </div>
        )
    }
}