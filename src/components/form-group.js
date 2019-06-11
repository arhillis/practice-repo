import React, { Component } from 'react';

class FormGroup extends Component {
    render() {
        const name = this.props.name;
        return (
            <div className="form-group">
                <label htmlFor={name} className="col-form-label">{name[0].toUpperCase() + name.slice(1, name.length)}</label>
                <input type="text" className="form-control" name={name} required></input>
            </div>
        );
    }
}

export default FormGroup;