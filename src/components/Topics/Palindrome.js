import React, { Component } from 'react';


export default class Palindrome extends Component {
    constructor () {
        super ()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange (val) {
        this.setState ( { userInput: val } )
    }

    isPalindrome (userInput) {
        let forward = userInput;
        let backward = userInput;
        backward = backward.split('');
        backward = backward.reverse();
        backward = backward.join('');
        if (forward === backward){
            this.setState ( { palindrome: true } );
        }else {
            this.setState ( { palindrome: false } );
        }
    }

    render () {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={ (e) => { this.handleChange( e.target.value ) } }/>
                <button className='confirmationButton' onClick={ () => { this.isPalindrome( this.state.userInput ) } }>Filter</button>
                <span className='resultsBox'>Palindrome: { JSON.stringify( this.state.palindrome ) }</span>

            </div>
        )
    }
}