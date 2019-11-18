import React, { Component } from 'react';


export default class FilterString extends Component {
    constructor () {
        super ()
        this.state = {
            unfilteredArray: ['Sarmad', 'John', 'Sam', 'Josh'],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange( val ) {
        this.setState ( { userInput: val } )
    }

    filterString (userInput) {
        let unfilteredArray = this.state.unfilteredArray;
        let filteredArray = [];
        for (let i = 0; i < unfilteredArray.length; i++){
            if (unfilteredArray[i].includes(userInput)) {
                filteredArray.push(unfilteredArray[i]);
            }
        }
        this.setState ( { filteredArray: filteredArray } );
    }

    render () {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Name: { JSON.stringify( this.state.unfilteredArray, null, 10 ) }</span>
                <input className='inputLine' onChange={ (e) => { this.handleChange ( e.target.value ) } }/>
                <button className='confirmationButton' onClick={ () => { this.filterString ( this.state.userInput ) } }>Filter</button>
        <span className='resultsBox filterStringRB'>Filtered Names: { JSON.stringify ( this.state.filteredArray, null, 10 ) }</span>

            </div>
        )
    }
}