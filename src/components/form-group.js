import React, { Component } from 'react';
import YearSelect from './year-select';

class FormGroup extends Component {
    constructor(props){
        super(props)
        this.onChange = this.props.onChange.bind(this)
    }

    titleCase(name){
        return name[0].toUpperCase() + name.slice(1, name.length)
    }
    render() {
        const {name, value}= this.props;
        return (
            <div className="form-group">
                <label htmlFor={name} className="col-form-label">{this.titleCase(name)}</label>
                {name === 'year' ?
                    <YearSelect changeProp={this.onChange}/> :
                    <input 
                        type="text" 
                        className="form-control" 
                        name={name} 
                        value = {value}
                        onChange={this.onChange}
                        required></input>                
                }
                
            </div>
        );
    }
}

export default FormGroup;