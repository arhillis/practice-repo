import React, { Component } from 'react';
import uuid from 'uuid';

class AuthorForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: uuid.v4(),
            firstName: '',
            lastName: ''
        }

        this.changeAuthor = this.changeAuthor.bind(this);
    }

    
    changeAuthor(event){
        const {name, value} = event.target;
        this.setState(prevState =>{
            const newAuthor = {
                id: this.state.id,
                firstName: name === 'firstName' ? value : prevState.firstName,
                lastName: name === 'lastName' ? value : prevState.lastName
            }

            this.props.addAuthor(newAuthor);
            return newAuthor;
        });
    }

    render() {
        return (             
            <div className="author">
                <label>Author</label>
                <div className="row">
                    <div className="col">
                        <input type="text" 
                                name= 'firstName'
                                className="form-control" 
                                placeholder="First name" 
                                onChange={this.changeAuthor}
                        />
                    </div>
                    <div className="col">
                        <input type="text" 
                                name = 'lastName'
                                className="form-control" 
                                placeholder="Last name" 
                                onChange={this.changeAuthor}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorForm;