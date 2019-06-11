import React, { Component } from 'react';
import FormGroup from './form-group';
import Authors from './authors';

class EditForm extends Component {
    render(){
        return (
            <form className="col-12 col-md-6" id="source-form">
                <FormGroup name="title" />
                <hr></hr>
                <Authors authors = {this.props.authors} />
                <FormGroup name="publisher" />
                <FormGroup name="year" />                
            </form>
        )
    }
}

export default EditForm;