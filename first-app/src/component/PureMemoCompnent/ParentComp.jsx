import React, {Component } from 'react';
import MemoComp from './MemoComp';
// import PureComp from './Purecom';
import RegComp from './Regcom';

class ParentComp extends Component {
    state = { name:"sajad" } 
    //when occurs CDM
    componentDidMount() {
        setInterval(() => {
            this.setState({name:"sajad"})
            
        }, 1000);
        
    }
    render() { 
        console.log('parentcomponent');
        return (
            <div>parent component
            <RegComp name={this.state.name}/>
            {/* <PureComp name={this.state.name}/> */}
            <MemoComp name={this.state.name}/>
            </div>
            
        );
    }
}
 
export default ParentComp;