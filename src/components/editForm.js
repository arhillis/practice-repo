import React, { Component } from 'react';
import FormGroup from './form-group';
import AuthorFormGroup from './author-form-group';

class EditForm extends Component {
    constructor(){
        super();
        this.state = {
            authors: [],
            title: '',
            publisher: '',
            year: 2000
        }

        this.changeProp = this.changeProp.bind(this)
    }

    changeProp(event){
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    onClick(e){
        e.preventDefault();
        console.log(this.state);
    }
    render(){

        return (
            <form className="col-12 col-md-6" id="source-form"
                        onSubmit={this.onClick.bind(this)}>
                <AuthorFormGroup authors = {this.props.authors || [{}]} />
                <hr></hr>
                <FormGroup name="title" 
                    onChange={this.changeProp}
                    />
                <FormGroup name="publisher"
                    onChange={this.changeProp}
                    />
                <FormGroup name="year"
                    onChange={this.changeProp}
                    />
                <input type="submit" 
                        className="btn btn-primary" 
                        value="Submit"/>
            </form>
        )
    }
}

export default EditForm;