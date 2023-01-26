import React, { Component } from 'react';

class RegComp extends Component {
    
    render() { console.log('Regcomp');
        return (
            <div>Regcom-{this.props.name}</div>
        );
    }
}
 
export default RegComp;