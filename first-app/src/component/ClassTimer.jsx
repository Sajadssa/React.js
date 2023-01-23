import React, { Component } from 'react';

class ClassTimer extends Component {
   
    state = { count:0 };
    //When cdm set timer interval
    componentDidMount() {
        //set interval
       this.myTimer= setInterval(()=>{
            console.log('hi sajad');
            this.setState({count:this.state.count+1});

        },1000);
        
    };
//when execution cwum clean up interval 
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.myTimer);
    }

    render() { 
        return (
            <div>class interval</div>


        );
    }
}
 
export default ClassTimer;