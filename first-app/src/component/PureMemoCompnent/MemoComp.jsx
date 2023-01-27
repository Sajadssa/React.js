import React from 'react';
const MemoComp = (props) => {
    console.log('MemoComp');
    return ( 
       
        <div>
        

        MemoComp-{props.name}
        
        
        </div>

     );
}
 
export default React.memo(MemoComp) ;