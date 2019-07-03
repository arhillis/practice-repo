import React, { Component } from 'react';
import FormGroup from './form-group';
import AuthorFormGroup from './author-form-group';

class EditForm extends Component {
    constructor(){
        super();
        this.state = {
            authors: [
                {
                    firstName: '',
                    lastName: ''
                }
            ],
            title: '',
            publisher: '',
            year: 2000
        }

        this.changeProp = this.changeProp.bind(this)
        this.numAuthors = this.numAuthors.bind(this)
    }
    
    numAuthors(event){
        let arr = [], num = parseInt(event.target.value);
        
        while(num > 0){
            arr.push({
                firstName: '',
                lastName: ''
            });
            num--;
        }
        this.setState({authors: arr});

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
                <AuthorFormGroup authors = {this.state.authors} 
                    onChange={this.numAuthors}
                />
                <hr></hr>
                <FormGroup name="title" 
                    value={this.state.title}
                    onChange={this.changeProp}
                    />
                <FormGroup name="publisher"
                    value={this.state.publisher}
                    onChange={this.changeProp}
                    />
                <FormGroup name="year"
                    value={this.state.year}
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