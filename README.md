# label-float-select 

## install
    npm -i --save label-float-select


## Code
``` jsx

import React from 'react';
import LabelFloatSelect from 'label-float-select';

export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:[{value:'Chennai',label:'Chennai'},{value:'Bangalore',label:'Bangalore'}],
            selected:'Chennai'
        };
        this.handler=this.handler.bind(this)
    }
    handler(val){
        this.setState({
            selected:val,
        })
    }
    render(){
        return(
            <div className="">
                <LabelFloatSelect  
                    ref=""
                    options={this.state.options}
                    label="Select the City"
                    fontSize="18px"
                    fontFamily="monospace"
                    onChange={this.handler}
                    color="blue"
                    value={this.state.selected}
                />
            </div>
        )
    }
}


