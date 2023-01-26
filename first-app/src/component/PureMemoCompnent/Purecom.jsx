import React, {PureComponent } from 'react';

class PureComp extends PureComponent {
    
    render() { console.log('PureComp');
        return ( <div>PureCom -{this.props.name}</div>


        );
    }
}
 
export default PureComp;