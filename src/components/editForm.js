import React, { Component } from 'react';
import FormGroup from './form-group';
import Authors from './authors';

class EditForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            publisher: '',
            year: 2000
        }
    }

    changeProp(prop, str){
        this.setState({[prop]: str});
    }

    onClick(e){
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        if(this.props.source)
            this.setState({title: this.props.source.title})

        return (
            <form className="col-12 col-md-6" id="source-form"
                        onSubmit={this.onClick.bind(this)}>
                <Authors authors = {this.props.authors || [{}]} />
                <hr></hr>
                <FormGroup name="title" 
                    onChange={this.changeProp.bind(this)}
                    />
                <FormGroup name="publisher"
                    onChange={this.changeProp.bind(this)}
                    />
                <FormGroup name="year"
                    onChange={this.changeProp.bind(this)}
                    />    
                <input type="submit" 
                        className="btn btn-primary" 
                        value="Submit"/>
            </form>
        )
    }
}

export default EditForm;