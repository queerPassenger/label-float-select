import React from 'react';

export default class LabelFloatSelect extends React.Component{
    constructor(props){
        super(props);
        this.state={
            _:'',
        };
        this['_ref']=Math.random().toString(36).substring(9);
        this.options=props.options;
        this.value=props.value;
        this.label=props.label;
        this.style={
            'label-float-select-wrapper':{
                float:'left',
                width:'100%',
            },
            'select-label':{
                float:'left',
                width:'100%',
                color:'#0468b5',
                fontFamily:props.fontFamily?props.fontFamily:'monospace',
                fontSize:props.fontSize?props.fontSize:'15px',
            },
            'select':{
                width:'100%',
                paddingTop:'10px',
                paddingBottom:'10px',
                border:'0px',
                borderBottom:'2px solid #0468b5',
                outline:'0px',
                fontFamily:props.fontFamily?props.fontFamily:'monospace',
            }
        }
    }
    componentWillReceiveProps(nextProps){
        let paramsToSet=this.diffChecker(nextProps,this);
        paramsToSet.map((param)=>{
            this[param]=nextProps[param];
        });
        this.mutateState();
    }
    diffChecker(curr,prev){
        let paramToCheck=['options','value','label'];
        let paramsToSet=[];
        paramToCheck.map((param)=>{
            if(JSON.stringify(curr[param])!==JSON.stringify(prev[param])){
                paramsToSet.push(param);
            }
        })
        return paramsToSet
    }
    mutateState(){
        this.setState({
            _:'',
        })
    }
    handleChange(){
        this.value=this.refs[this['_ref']].value;
        if(this.props.onChange){
            this.props.onChange(this.value);
        }
        this.mutateState();
    }
    render(){
        return(
            <div className="label-float-select-wrapper" style={this.style['label-float-select-wrapper']} >
                <div className="select-label" style={this.style['select-label']}>
                    {this.label}
                </div>
                <select 
                    ref={this['_ref']}
                    value={this.value}
                    onChange={this.handleChange.bind(this)}
                    style={this.style['select']}
                >
                    {this.options.map((option,optionInd)=>{
                        return(
                            <option key={this['_ref']+"options"+optionInd} value={option.value}>{option.label}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}