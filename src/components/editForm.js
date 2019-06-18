import React, { Component } from 'react';
import FormGroup from './form-group';
import Authors from './authors';

class EditForm extends Component {
    constructor(){
        super();
        this.state = {
            title: ''
        }
    }

    changeAuthor(event){
        this.setState({author: event.target.value});
    }

    onClick(e){
        e.preventDefault();
        console.log(e.target.value);
    }
    render(){
        if(this.props.source)
            this.setState({title: this.props.source.title})

        return (
            <form className="col-12 col-md-6" id="source-form"
                        onClick={this.onClick.bind(this)}>
                <Authors authors = {this.props.authors || [{}]} />
                <hr></hr>
                <FormGroup name="title" onChange={this.changeAuthor.bind(this)}/>
                <FormGroup name="publisher" />
                <FormGroup name="year" />     
                <input type="submit" 
                        className="btn btn-primary" 
                        value="Submit"/>
            </form>
        )
    }
}

export default EditForm;