import React, { Component } from 'react';


export default class FilterObject extends Component {
    constructor () {
        super ()
        this.state = {
            bandMembers: [{name: 'Sarmad', role: 'vocalist', hair: 'Brown'},
                              {name: 'Mack', role: 'guitartist', hair: 'Blue'},
                              {name: 'Nick', role: 'bassist', hair: 'Black'},
                              {name: 'Jack', role: 'drummer', hair: 'Blonde'}],
            userInput: '',
            filteredBandMembers: []
        }
    }
    handleChange (val) {
        this.setState ( { userInput: val } );
    }

    filterObjectArray (prop) {
        let bandMembers = this.state.bandMembers;
        let filteredArr = []
        for (let i = 0; i < bandMembers.length; i++){
            if (bandMembers[i].hasOwnProperty(prop)){
                filteredArr.push(bandMembers[i]);
            }
        }
        this.setState ( { filteredBandMembers: filteredArr } );
    }

    render () {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
        <span className='puzzleText'>Original: { JSON.stringify( this.state.bandMembers, null, 10 ) }</span>
                <input className='inputLine' onChange={ (e) => this.handleChange( e.target.value ) }/>
                <button className='confirmationButton' onClick={ () => { this.filterObjectArray( this.state.userInput ) } }>Filter</button>
        <span className='resultBox filterObjectRB'>Filtered: { JSON.stringify( this.state.filteredBandMembers, null, 10 ) }</span>
            </div>
        )
    }
}