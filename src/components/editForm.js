import React, { Component } from 'react';
import FormGroup from './form-group';
import Authors from './authors';

class EditForm extends Component {
    render(){
        return (
            <form className="col-12 col-md-6" id="source-form">
                <Authors authors = {this.props.authors || [{}]} />
                <hr></hr>
                <FormGroup name="title" />
                <FormGroup name="publisher" />
                <FormGroup name="year" />     
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default EditForm;