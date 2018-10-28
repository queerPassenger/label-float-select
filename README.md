# label-float-input 

## install
    npm -i --save label-float-select


## Code
``` jsx

import React from 'react';
import LabelFloatSelect from 'label-float-select';
export default class Custom extends React.Component{
    render(){
        return(
            <div className="parent-wrapper">
                <LabelFloatInput 
                    ref=""
                    options={[{value:'',label:''}]}
                    label="Select the Application"
                    fontSize="16px"
                    fontFamily="monospace"
                    onChange={this.handler}
                />
            </div>
        )
    }
}


