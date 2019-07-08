import React, { Component } from 'react';
import FormGroup from './form-group';
import AuthorFormGroup from './author-form-group';
import uuid from 'uuid';

class EditForm extends Component {
    constructor(){
        super();
        this.state = {
            id: uuid.v4(),
            authors: [
                {
                    id: uuid.v4(),
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
        this.changeAuthor = this.changeAuthor.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    
    numAuthors(event){
        let arr = [], num = parseInt(event.target.value);
        
        while(num > 0){
            arr.push({
                id: uuid.v4(),
                firstName: '',
                lastName: ''
            });
            num--;
        }
        this.setState({authors: arr});

    }

    changeAuthor(newAuthor, index){
        this.setState(prevState => {
            prevState.authors[index] = newAuthor;
            return prevState;
        })
    }

    changeProp(event){
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    onClick(e){
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({
            id: uuid.v4(),
            authors: [
                {
                    id: uuid.v4(),
                    firstName: '',
                    lastName: ''
                }
            ],
            title: '',
            publisher: '',
            year: 2000
        })
    }
    render(){
        return (
            <form className="col-12 col-md-6" id="source-form"
                        onSubmit={this.onClick}>
                <AuthorFormGroup authors = {this.state.authors} 
                    onChange={this.numAuthors}
                    onEdit={this.changeAuthor}
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