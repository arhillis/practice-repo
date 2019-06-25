import React, { Component } from 'react';
import YearSelect from './year-select';

class FormGroup extends Component {
    constructor(props){
        super(props)
        this.onChange = this.props.onChange.bind(this)
    }
    render() {
        const name = this.props.name;
        return (
            <div className="form-group">
                <label htmlFor={name} className="col-form-label">{name[0].toUpperCase() + name.slice(1, name.length)}</label>
                {name === 'year' ?
                    <YearSelect changeProp={this.props.onChange}/> :
                    <input 
                        type="text" 
                        className="form-control" 
                        name={name} 
                        onChange={this.onChange}
                        required></input>                
                }
                
            </div>
        );
    }
}

export default FormGroup;